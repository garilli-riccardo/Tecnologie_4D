export class Email {
  constructor(
    public recipient: string,
    public subject: string,
    public body: string,
    public orarioInvio: string = '',
    public espanso: boolean = false,
    public speciale: boolean = false
  ) {}
}