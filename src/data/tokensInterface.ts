export interface Env {
    staging: Mode;
    dev:     Mode;
    rc:      Mode;
    prod:    Mode;
}

export interface Mode {
    common: LiveApiKey;
    test:   LiveApiKey;
    demo:   LiveApiKey;
}

export type LiveApiKey = string;
