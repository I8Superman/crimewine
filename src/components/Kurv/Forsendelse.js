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
                <div className="customer-info">
                    <h3 className='c-shipping__header'>Adresseoplysninger</h3>
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
                    <textarea className={'form-field full-width'} name="comments" Placeholder="Kommentarer til din ordre" />
                </div>
                <div className="shipping-options">
                    <h3 className='c-shipping__header'>Forsendelse</h3>
                    <div className='shipping-option'>
                        <input type="radio" name="" id="" />
                        <div classname="option-text">
                            <h3 classname='option-title'>GLS PAkkeshop</h3>
                            <p className='option-notes'>Nogle noter angående denne forsendelsesmetode</p>
                        </div>
                    </div>
                    <div className='shipping-option'>
                        <input type="radio" name="" id="" />
                        <div classname="option-text">
                            <h3 classname='option-title'>GLS PAkkeshop</h3>
                            <p className='option-notes'>Nogle noter angående denne forsendelsesmetode</p>
                        </div>
                    </div>
                    <div className='shipping-option'>
                        <input type="radio" name="" id="" />
                        <div classname="option-text">
                            <h3 classname='option-title'>GLS PAkkeshop</h3>
                            <p className='option-notes'>Nogle noter angående denne forsendelsesmetode</p>
                        </div>
                    </div>
                    <div className='shipping-option'>
                        <input type="radio" name="" id="" />
                        <div classname="option-text">
                            <h3 classname='option-title'>GLS PAkkeshop</h3>
                            <p className='option-notes'>Nogle noter angående denne forsendelsesmetode</p>
                        </div>
                    </div>
                </div>
                {/* <input type="submit" name="Haarr" /> */}
            </form>

        </div>
    )
}