import './Betaling.scss';

import { useRef, useState } from 'react';

export default function Betaling(props) {

    // const [currentFocus, setCurrentFocus] = useState('');

    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [shippingFormData, setShippingFormData] = useState({
        customerType: 'private',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        zipcode: '',
        city: '',
        country: '',
        phone: '',
        notes: '',
        shippingOption: {
            method: '',
            optionalPickup: {
                place: 'Slikland Valby',
                address: 'Toftegårds Allé 9a, 2500 Valby'
            }
        }
    });

    // function applyFocus(e) { // Should this be done with refs (useRef) instead??
    //     console.log(e.currentTarget.children[0])
    //     const currentDiv = e.currentTarget.dataset.name;
    //     setCurrentFocus(currentDiv);
    //     // Targets the second child of the parent div - the actual input
    //     // and focuses it, so the cursor will show up in the input field even if you click the parent
    //     e.currentTarget.children[1].focus();
    // }

    function handleChange(e) {
        const validity = e.target.checkValidity();
        console.log(validity);
        setShippingFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        });
    }

    function changePickup(e) {
        e.stopPropagation();
        const place = e.currentTarget.children[0].textContent;
        const address = e.currentTarget.children[1].textContent;
        setShippingFormData(prevFormData => {
            return {
                ...prevFormData,
                shippingOption: {
                    optionalPickup: {
                        place: place,
                        address: address
                    }
                }
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.table(shippingFormData);
        alert(JSON.stringify(shippingFormData));
    }

    return (
        <div className="c-payment">
            <div className="c-payment__breadcrumbs-and-order-btn">
                <div className="c-payment__breadcrumbs">
                    <p className='c-payment__breadcrumbs__indkøbskurv'>Indkøbskurv</p>
                    <p className='c-payment__breadcrumbs__information'>{'> Information og forsendelse'}</p>
                    <p className='c-payment__breadcrumbs__betal'>{'> Godkend og betal'}</p>
                </div>
                <button type="submit" className='c-payment__breadcrumbs__submit-button-top'>Til betaling</button>
            </div>

            <form onSubmit={handleSubmit}>
                <fieldset className="payment-options">
                    <h4 className='payment-options__header'>Betaling</h4>
                    <label className='payment-option' >
                        <input className='radio-button' id='radio' type="radio" name="payment-option-select" />
                        <div className="option-text">
                            <h4 className='option-title'>GLS Levering til dør</h4>
                            <p className='option-notes'>Så er du fri for at skulle ud af døren!</p>
                        </div>
                        <p className='payment-cost'>59,00 DKK</p>
                    </label>
                    <label className='payment-option' >
                        <input className='radio-button' id='radio' type="radio" name="payment-option-select" />
                        <div className="option-text">
                            <h4 className='option-title'>Afhentning i Valby</h4>
                            <p className='option-notes'>Kom forbi i vores åbningstid eller ring/skriv og lav
                                en aftale med os om afhentning.</p>
                        </div>
                        <p className='payment-cost'>0,00 DKK</p>
                    </label>
                    <label className='payment-option' >
                        <input className='radio-button' id='radio' type="radio" name="payment-option-select" />
                        <div className="option-text">
                            <h4 className='option-title'>Særlig aftale</h4>
                            <p className='option-notes'>I særlige tilfælde bringer vi selv din vin ud. Fx til ældre
                                og gangbesværede, eller hvis du står og skal bruge nogle
                                flasker akut til et arrangement. Ring eller skriv og hør os ad.</p>
                        </div>
                        <p className='payment-cost'>0,00 DKK</p>
                    </label>
                    <button type="submit" className='payment-options__submit-button-bottom'>Til betaling</button>
                </fieldset>
                <fieldset className="customer-info">
                    <h3 className='customer-info__header'>Ordreoversigt</h3>
                    <div className={'input-container select-container full-width'}>
                        <label htmlFor="customerType">Kundetype</label>
                        <select className={'form-input select-input'} name="customertype" id="customerType" >
                            <option value="private">Privat</option>
                            <option value="company">Virksomhed</option>
                            <option value="public">Offentlig virksomhed</option>
                        </select>
                    </div>
                    <div className={'input-container full-width'}>
                        <label htmlFor="email">E-mail*</label>
                        <input ref={emailRef} className='form-input' type="email" id='email' name='email' value={shippingFormData.email} onChange={handleChange} placeholder="&nbsp;" pattern='(.+)@(.+)\.(.){2,4}' required />
                        <span className="error" id="err-mail" aria-live="assertive">Skriv en korrekt email-adresse</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="firstname">Fornavn*</label>
                        <input ref={firstNameRef} className='form-input' type="text" name="firstName" id='firstname' value={shippingFormData.firstName} onChange={handleChange} placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
                        <span className="error" id="err-mail" aria-live="assertive">Husk: første bogstav med stort!</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="lastname">Efternavn*</label>
                        <input ref={lastNameRef} className='form-input' type="text" name="lastName" id='lastname' value={shippingFormData.lastName} onChange={handleChange} placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
                        <span className="error" id="err-lastname" aria-live="assertive">Husk: første bogstav med stort!</span>
                    </div>
                    <div className={'input-container full-width'}>
                        <label htmlFor="address">Adresse*</label>
                        <input className='form-input' type="text" name="address" id='address' placeholder="&nbsp;" pattern='^\D+(\d+)(.+)?' required />
                        <span className="error" id="err-adress" aria-live="assertive">Skriv en gyldig addresse</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="postalcode">Postnummer*</label>
                        <input className='form-input' type="text" name="postalcode" id='postalcode' placeholder="&nbsp;" pattern='\d{4}' required />
                        <span className="error" id="err-postal-code" aria-live="assertive">Indtast præcist 4 cifre</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="city">By*</label>
                        <input className='form-input' type="text" name="city" id='city' placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
                        <span className="error" id="err-city" aria-live="assertive">Bynavn med stort, tak.</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="country">Land*</label>
                        <input className='form-input' type="text" name="country" id='country' placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
                        <span className="error" id="err-country" aria-live="assertive">Skriv dit land (med stort)</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="phone">Telefonnummer</label>
                        <input className='form-input' type="tel" name="phone" id='phone' placeholder="&nbsp;" pattern='^(((00|0)|(\+))?(45)?)? ?(\d{2} ?){4}$' />
                        <span className="error" id="err-phone" aria-live="assertive">Skriv et korrekt telefonnummer</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="notes">Noter</label>
                        <textarea className={'form-input'} name="notes" id='notes' placeholder="&nbsp;" />
                    </div>
                </fieldset>
            </form>

        </div >
    )
}