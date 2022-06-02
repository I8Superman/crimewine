import './Forsendelse.scss';

// import { useContext, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

// import { OrderContext } from '../../contexts/OrderContext';

export default function Forsendelse(props) {

    const [order, setOrder] = useOutletContext();

    // const [order, setorder] = useState({
    //     customerType: 'private',
    //     email: '',
    //     firstName: '',
    //     lastName: '',
    //     address: '',
    //     zipcode: '',
    //     city: '',
    //     country: '',
    //     phone: '',
    //     notes: '',
    //     shippingOption: {
    //         method: '',
    //         optionalPickup: {
    //             place: 'Slikland Valby',
    //             address: 'Toftegårds Allé 9a, 2500 Valby'
    //         }
    //     }
    // });

    function handleChange(e) {
        const validity = e.target.checkValidity();
        console.log(validity);
        setOrder(prevFormData => {
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
        setOrder(prevFormData => {
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
        console.table(order);
        alert(JSON.stringify(order));
    }

    console.log(order)

    return (
        <div className="c-shipping">
            <div className="c-shipping__breadcrumbs-and-order-btn">
                <div className="c-shipping__breadcrumbs">
                    <p className='c-shipping__breadcrumbs__indkøbskurv'>Indkøbskurv</p>
                    <p className='c-shipping__breadcrumbs__information'>{'> Information og forsendelse'}</p>
                    <p className='c-shipping__breadcrumbs__betal'>{'> Godkend og betal'}</p>
                </div>
                <button type="submit" className='c-shipping__breadcrumbs__submit-button-top'>Til betaling</button>
            </div>

            <form onSubmit={handleSubmit}>
                <fieldset className="customer-info">
                    <h3 className='customer-info__header'>Adresseoplysninger</h3>
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
                        <input className='form-input' type="email" id='email' name='email' value={order.email} onChange={handleChange} placeholder="&nbsp;" pattern='(.+)@(.+)\.(.){2,4}' required />
                        <span className="error" id="err-mail" aria-live="assertive">Skriv en korrekt email-adresse</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="firstname">Fornavn*</label>
                        <input className='form-input' type="text" name="firstName" id='firstname' value={order.firstName} onChange={handleChange} placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
                        <span className="error" id="err-mail" aria-live="assertive">Husk: første bogstav med stort!</span>
                    </div>
                    <div className={'input-container half-width'}>
                        <label htmlFor="lastname">Efternavn*</label>
                        <input className='form-input' type="text" name="lastName" id='lastname' value={order.lastName} onChange={handleChange} placeholder="&nbsp;" pattern='^[A-Z]\w*' required />
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
                <fieldset className="shipping-options">
                    <h3 className='shipping-options__header'>Forsendelse</h3>
                    <label className='shipping-option' >
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>GLS Pakkeshop</h3>
                            <p className='option-notes'>Levering til GLS pakkeshop i nærheden af din adresse</p>
                            <div className="pickup-options">
                                <p className='pickup-name'><b>{order.shippingOption.optionalPickup.place}</b></p>
                                <p className='pickup-adress'>{order.shippingOption.optionalPickup.address}</p>
                                <div className="dropdown">
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Slikland Valby</p>
                                        <p className='pickup-adress'>Toftegårds Allé 9a, 2500 Valby</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Superkiosken Vesterbro</p>
                                        <p className='pickup-adress'>Vesterbrogade 77, 1600 Vesterbro</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Kiosk 44 Valby</p>
                                        <p className='pickup-adress'>Valby Langgade 44, 2500 Valby</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Badutspring Børne-gear</p>
                                        <p className='pickup-adress'>Vigerslev Allé 31, 2500 Valby</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>HentNu Pakkeshop</p>
                                        <p className='pickup-adress'>Ålekistevej 134, 2700 Vanløse</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Rak & Pak </p>
                                        <p className='pickup-adress'>Kistegade 45, 1666 Vesterbro</p>
                                    </div>
                                    <div className="pickup-option" onClick={e => changePickup(e)}>
                                        <p className='pickup-name'>Postnord Posthus</p>
                                        <p className='pickup-adress'>Superbrugsen i Spinderiet, Torvet 3, 2500 Valby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='shipping-cost'>39,00 DKK</p>
                    </label>
                    <label className='shipping-option' >
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>GLS Levering til dør</h3>
                            <p className='option-notes'>Så er du fri for at skulle ud af døren!</p>
                        </div>
                        <p className='shipping-cost'>59,00 DKK</p>
                    </label>
                    <label className='shipping-option' >
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>Afhentning i Valby</h3>
                            <p className='option-notes'>Kom forbi i vores åbningstid eller ring/skriv og lav
                                en aftale med os om afhentning.</p>
                        </div>
                        <p className='shipping-cost'>0,00 DKK</p>
                    </label>
                    <label className='shipping-option' >
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>Særlig aftale</h3>
                            <p className='option-notes'>I særlige tilfælde bringer vi selv din vin ud. Fx til ældre
                                og gangbesværede, eller hvis du står og skal bruge nogle
                                flasker akut til et arrangement. Ring eller skriv og hør os ad.</p>
                        </div>
                        <p className='shipping-cost'>0,00 DKK</p>
                    </label>
                    <button type="submit" className='shipping-options__submit-button-bottom'>Til betaling</button>
                </fieldset>
            </form>

        </div >
    )
}