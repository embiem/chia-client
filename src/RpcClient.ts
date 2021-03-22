import { readFileSync } from 'fs';
import { Agent } from 'https';
import axios from 'axios';

type Protocol = 'https' | 'http';

interface ChiaOptions {
    protocol: Protocol;
    hostname: string;
    port: number;
    certPath: string;
    keyPath: string;
}

class RpcClient {
    private readonly protocol: Protocol;
    private readonly hostname: string;
    private readonly port: number;
    private readonly agent: Agent;

    public constructor(options: ChiaOptions) {
        this.protocol = options.protocol;
        this.hostname = options.hostname;
        this.port = options.port;
        this.agent = new Agent({
            cert: readFileSync(options.certPath),
            key: readFileSync(options.keyPath)
        });
    }

    private baseUri(): string {
        return `${this.protocol}://${this.hostname}:${this.port}`;
    }

    protected async request<T>(route: string, body: Record<string, string | number | boolean | string[] | undefined>): Promise<T> {
        const { data } = await axios.post<T>(`${this.baseUri()}/${route}`, body, { httpsAgent: this.agent, timeout: 10000 });

        return data;
    }
}

export {
    ChiaOptions,
    RpcClient
};
