import {useFormik} from "formik";
import {GetAgentApi} from "./model/api.ts";
import {useState} from "react";
import {Box, Button, Checkbox, FormControlLabel, MenuItem, Modal, TextField} from "@mui/material";
import {modalStyle} from "./model/theme.ts";

interface NewShareModalProps {
    close: () => void;
    isOpen: boolean;
}

function NewShareModal({ close, isOpen }: NewShareModalProps) {
    const [errorMessage, setErrorMessage] = useState(<></>);

    const form = useFormik({
        initialValues: {
            shareMode: "public",
            backendMode: "proxy",
            target: "",
            insecure: false,
        },
        onSubmit: v => {
            setErrorMessage(<></>);
            switch(v.shareMode) {
                case "public":
                    GetAgentApi().agentSharePublic(v)
                        .then(r => {
                            close();
                        })
                        .catch(e => {
                            e.response().json().then(ex => {
                                setErrorMessage(<p>{ex.message}</p>);
                                console.log(ex.message);
                            })
                        });
                    break;

                case "private":
                    GetAgentApi().agentSharePrivate(v)
                        .then(r => {
                            close();
                        })
                        .catch(e => {
                            e.response().json().then(ex => {
                                setErrorMessage(<p>{ex.message}</p>);
                                console.log(ex.message);
                            })
                        });
                    break;
            }
        },
    });

    return (
        <Modal open={isOpen} onClose={close}>
            <Box sx={{ ...modalStyle }}>
                <h2>Share...</h2>
                {errorMessage}
                <form onSubmit={form.handleSubmit}>
                    <TextField
                        fullWidth
                        select
                        id="shareMode"
                        name="shareMode"
                        label="Share Mode"
                        value={form.values.shareMode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        sx={{ mt: 2 }}
                    >
                        <MenuItem value="public">public</MenuItem>
                        <MenuItem value="private">private</MenuItem>
                    </TextField>
                    {form.values.shareMode === "public" && (
                        <TextField
                            fullWidth select
                            id="backendMode"
                            name="backendMode"
                            label="Backend Mode"
                            value={form.values.backendMode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            sx={{ mt: 2 }}
                        >
                            <MenuItem value="proxy">proxy</MenuItem>
                            <MenuItem value="web">web</MenuItem>
                            <MenuItem value="caddy">caddy</MenuItem>
                            <MenuItem value="drive">drive</MenuItem>
                        </TextField>
                    )}
                    {form.values.shareMode === "private" && (
                        <TextField
                            fullWidth select
                            id="backendMode"
                            name="backendMode"
                            label="Backend Mode"
                            value={form.values.backendMode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            sx={{ mt: 2 }}
                        >
                            <MenuItem value="proxy">proxy</MenuItem>
                            <MenuItem value="web">web</MenuItem>
                            <MenuItem value="tcpTunnel">tcpTunnel</MenuItem>
                            <MenuItem value="udpTunnel">udpTunnel</MenuItem>
                            <MenuItem value="caddy">caddy</MenuItem>
                            <MenuItem value="drive">drive</MenuItem>
                            <MenuItem value="socks">socks</MenuItem>
                            <MenuItem value="vpn">vpn</MenuItem>
                        </TextField>
                    )}
                    <TextField
                        fullWidth
                        id="target"
                        name="target"
                        label="Target"
                        value={form.values.target}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        sx={{ mt: 2 }}
                    />
                    {form.values.backendMode === "proxy" && (
                        <Box>
                            <FormControlLabel
                                control={<Checkbox
                                    id="insecure"
                                    name="insecure"
                                    label="Insecure"
                                    checked={form.values.insecure}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                />}
                                label="Insecure"
                                sx={{ mt: 2 }}
                            />
                        </Box>
                    )}
                    <Button color="primary" variant="contained" type="submit" sx={{ mt: 2 }}>Create Share</Button>
                </form>
            </Box>
        </Modal>
    );
}

export default NewShareModal;