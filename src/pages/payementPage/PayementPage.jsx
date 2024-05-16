import {PaymentElement} from '@stripe/react-stripe-js'; 
export default function PayementPage() {
    return (
        <form>
            <PaymentElement />
            <button type="submit">submit</button>
        </form> 
    )
}