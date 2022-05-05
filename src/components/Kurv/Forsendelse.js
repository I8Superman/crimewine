import './Forsendelse.scss';

export default function Forsendelse(props) {
    return (
        <div className="c-shipping">
            <div className="c-shipping__breadcrumbs-and-order-btn">
                <div className="c-shipping__breadcrumbs">
                    <p className='c-shipping__breadcrumbs__indkøbskurv'>Indkøbskurv</p>
                    <p className='c-shipping__breadcrumbs__information'>{'> Information og forsendelse'}</p>
                    <p className='c-shipping__breadcrumbs__betal'>{'> Godkend og betal'}</p>
                </div>
            </div>
            <form action="">
                <fieldset className="customer-info">
                    <h3 className='customer-info__header'>Adresseoplysninger</h3>
                    <select className={'form-field full-width'} name="customertype" id="">
                        <option value="private">Privat</option>
                        <option value="company">Virksomhed</option>
                        <option value="public">Offentlig virksomhed</option>
                    </select>
                    <input className={'form-field full-width'} type="email" Placeholder="E-mail" />
                    <input className={'form-field half-width'} type="text" name="firstname" Placeholder="Fornavn" />
                    <input className={'form-field half-width'} type="text" name="lastname" Placeholder="Efternavn" />
                    <input className={'form-field full-width'} type="text" name="street-and-number" Placeholder="Adresse" />
                    <input className={'form-field half-width'} type="text" name="postalcode" Placeholder="Postnummer" />
                    <input className={'form-field half-width'} type="text" name="city" Placeholder="By" />
                    <input className={'form-field half-width'} type="text" name="country" Placeholder="Land" />
                    <input className={'form-field half-width'} type="tel" name="phonenumber" Placeholder="Telefonnummer" />
                    <textarea className={'comments full-width'} name="comments" Placeholder="Kommentarer til din ordre" />
                </fieldset>
                <fieldset className="shipping-options">
                    <h3 className='shipping-options__header'>Forsendelse</h3>
                    <label className='shipping-option' htmlFor='radio'>
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" checked />
                        <div className="option-text">
                            <h3 className='option-title'>GLS Pakkeshop</h3>
                            <p className='option-notes'>Levering til GLS pakkeshop i nærheden af din adresse</p>
                        </div>
                        <p className='shipping-cost'>39,00 DKK</p>
                    </label>
                    <label className='shipping-option' htmlFor='radio'>
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>GLS Levering til dør</h3>
                            <p className='option-notes'>Så er du fri for at skulle ud af døren!</p>
                        </div>
                        <p className='shipping-cost'>59,00 DKK</p>
                    </label>
                    <label className='shipping-option' htmlFor='radio'>
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>Afhentning i Valby</h3>
                            <p className='option-notes'>Kom forbi i vores åbningstid eller ring/skriv og lav
                                en aftale med os om afhentning.</p>
                        </div>
                        <p className='shipping-cost'>0,00 DKK</p>
                    </label>
                    <label className='shipping-option' htmlFor='radio'>
                        <input className='radio-button' id='radio' type="radio" name="shipping-option-select" />
                        <div className="option-text">
                            <h3 className='option-title'>Særlig aftale</h3>
                            <p className='option-notes'>I særlige tilfælde bringer vi selv din vin ud. Fx til ældre
                                og gangbesværede, eller hvis du står og skal bruge nogle
                                flasker akut til et arrangement. Ring eller skriv og hør os ad.</p>
                        </div>
                        <p className='shipping-cost'>0,00 DKK</p>
                    </label>
                </fieldset>
                {/* <input type="submit" name="Haarr" /> */}
            </form>

        </div>
    )
}