import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux"
import { setError } from "../errors/errorsActions"

export const logger: Middleware = <S>(api: MiddlewareAPI) => (
    next: Dispatch
) => (action: any) => {

    console.log(action.type)

    try {
        next(action)

        if (action.type.includes('error')) {
            console.log(action)
            throw action.payload
        }

    } catch (err) {
        console.error('Caught an exception!', err)
        setError(err,next)
    }
    finally{
        console.log(api.getState())

    }

}