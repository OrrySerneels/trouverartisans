import { IronSessionOptions } from 'iron-session'

export const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: 'artisan_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}