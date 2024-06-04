package limits

import (
	"github.com/jmoiron/sqlx"
	"github.com/openziti/zrok/controller/emailUi"
	"github.com/openziti/zrok/controller/store"
	"github.com/openziti/zrok/util"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
)

type warningAction struct {
	str *store.Store
	cfg *emailUi.Config
}

func newWarningAction(cfg *emailUi.Config, str *store.Store) *warningAction {
	return &warningAction{str, cfg}
}

func (a *warningAction) HandleAccount(acct *store.Account, rxBytes, txBytes int64, limit *BandwidthPerPeriod, _ *sqlx.Tx) error {
	logrus.Infof("warning '%v'", acct.Email)

	if a.cfg != nil {
		rxLimit := "(unlimited bytes)"
		if limit.Limit.Rx != Unlimited {
			rxLimit = util.BytesToSize(limit.Limit.Rx)
		}
		txLimit := "(unlimited bytes)"
		if limit.Limit.Tx != Unlimited {
			txLimit = util.BytesToSize(limit.Limit.Tx)
		}
		totalLimit := "(unlimited bytes)"
		if limit.Limit.Total != Unlimited {
			totalLimit = util.BytesToSize(limit.Limit.Total)
		}

		detail := newDetailMessage()
		detail = detail.append("Your account has received %v and sent %v (for a total of %v), which has triggered a transfer limit warning.", util.BytesToSize(rxBytes), util.BytesToSize(txBytes), util.BytesToSize(rxBytes+txBytes))
		detail = detail.append("This zrok instance only allows an account to receive %v, send %v, totalling not more than %v for each %v.", rxLimit, txLimit, totalLimit, limit.Period)
		detail = detail.append("If you exceed the transfer limit, access to your shares will be temporarily disabled (until the last %v falls below the transfer limit)", limit.Period)

		if err := sendLimitWarningEmail(a.cfg, acct.Email, detail); err != nil {
			return errors.Wrapf(err, "error sending limit warning email to '%v'", acct.Email)
		}
	} else {
		logrus.Warnf("skipping warning email for account limit; no email configuration specified")
	}

	return nil
}
