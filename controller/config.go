package controller

import (
	"time"

	"github.com/michaelquigley/cf"
	"github.com/openziti-test-kitchen/zrok/controller/store"
	"github.com/pkg/errors"
)

const ConfigVersion = 1

type Config struct {
	V            int
	Admin        *AdminConfig
	Endpoint     *EndpointConfig
	Email        *EmailConfig
	Registration *RegistrationConfig
	Store        *store.Config
	Ziti         *ZitiConfig
	Metrics      *MetricsConfig
	Influx       *InfluxConfig
	Maintenance  *MaintenanceConfig
}

type AdminConfig struct {
	Secrets []string `cf:"+secret"`
}

type EndpointConfig struct {
	Host string
	Port int
}

type EmailConfig struct {
	Host     string
	Port     int
	Username string
	Password string `cf:"+secret"`
}

type RegistrationConfig struct {
	EmailFrom               string
	RegistrationUrlTemplate string
}

type ZitiConfig struct {
	ApiEndpoint string
	Username    string
	Password    string `cf:"+secret"`
}

type MetricsConfig struct {
	ServiceName string
}

type InfluxConfig struct {
	Url    string
	Bucket string
	Org    string
	Token  string `cf:"+secret"`
}

type MaintenanceConfig struct {
	Registration *RegistrationMaintenanceConfig
}

type RegistrationMaintenanceConfig struct {
	ExpirationTimeout time.Duration
	CheckFrequency    time.Duration
}

func LoadConfig(path string) (*Config, error) {
	cfg := &Config{
		Metrics: &MetricsConfig{ServiceName: "metrics"},
	}
	if err := cf.BindYaml(cfg, path, cf.DefaultOptions()); err != nil {
		return nil, errors.Wrapf(err, "error loading controller config '%v'", path)
	}
	if cfg.V != ConfigVersion {
		return nil, errors.Errorf("expecting configuration version '%v', your configuration is version '%v'; please see zrok.io for changelog and configuration documentation", ConfigVersion, cfg.V)
	}
	return cfg, nil
}
