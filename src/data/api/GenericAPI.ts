export abstract class GenericAPI {
    constructor(protected delay: number) {}

    protected async pause(delay = this.delay): Promise<void> {
        if (!delay) {
            return;
        }
        return new Promise(resolve => setTimeout(resolve, delay));
    }
}
