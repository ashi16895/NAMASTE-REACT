import { useRouteError } from "react-router-dom"

export default ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooopss!!</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}