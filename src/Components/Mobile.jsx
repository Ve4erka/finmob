import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { MobileForm } from "./MobileForm";
import { HashLink } from "react-router-hash-link";
import "../Styles/mobile.scss";
import { useState } from "react";
import { useTranslation, UseTranslation } from "react-i18next";

export function Mobile(){

    const [modalWindow, setmodalWindow] = useState(false);
    const {t, i18n} = useTranslation();

    const showWindow = () => {setmodalWindow(!modalWindow)}
    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
    }


    return(
        <>
            <header>
                <div className = "header-social">
                    <img src="../../content/inst-mob.svg"></img>
                    <img src="../../content/tg-mob.svg"></img>
                    <img src="../../content/post-mob.svg"></img>
                </div>
                <div className = "header-menu" onClick={showWindow}>
                    <img src = "../../content/menu-mob.svg"></img>
                </div>
            </header>
            <div className = "first-block" id = "firstBlock">
                <div className="sidebar" style = {{display: modalWindow == false ? 'none':'flex'}}>
                    <div className="button-close-modal" onClick={showWindow}>
                        <img className = "cross-close" src = "../../content/cross-mob.svg"></img>
                    </div>
                    <button className="nav-button" onClick={showWindow}>
                        <HashLink smooth to="/#firstBlock">
                            {t("sidebar.title1")}
                        </HashLink>
                    </button>
                    <button className="nav-button" onClick={showWindow}>
                        <HashLink smooth to="/#AboutUs" >
                            {t("sidebar.title2")}
                        </HashLink>
                    </button>
                    <button className="nav-button" onClick={showWindow}>
                        <HashLink smooth to="/#cons" className="nav-button">
                            {t("sidebar.title3")}
                        </HashLink>
                    </button>
                    <button className="nav-button" onClick={showWindow}>
                        <HashLink smooth to="/" className="nav-button">
                            {t("sidebar.title4")}
                        </HashLink>
                    </button>
                </div>
                <div className = "swap-lang">
                    <button className = "rus" onClick = {()=>changeLanguage('ru')}>RU</button>
                    <button className = "eng" onClick = {()=>changeLanguage('en')}>ENG</button>
                </div>
                <div className = "text-block-fb">
                    <div className="title-fb">
                        FinWin.pro
                    </div>
                    <div className = "text-fb">
                        <div className = "two-lines">
                            <div className = "line"></div>
                            <div className = "line"></div>
                        </div>
                        <div>
                            <p>{t("firstblock.text1")} <br/>{t("firstblock.text2")}<br/>{t("firstblock.text3")}</p>
                        </div>
                    </div>
                </div>
                <div className = "button-block">
                    <button className = "button-send">{t("button")}</button>
                </div>
                <div className = "arrow-block">
                    <img src = "../../content/arrow-mob.svg"></img>
                </div>
                <div className = "service-сards-block">
                    <div className = "service-card">
                        <div>{t("service-card.text1")}</div>
                        <img src = "../../content/cons-icon-mob.svg"></img>
                    </div>
                    <div className = "service-card">
                        <div>{t("service-card.text2")}</div>
                        <img src = "../../content/budget-icon-mob.svg"></img>
                    </div>
                </div>
            </div>
            <div className = "second-block" id = "AboutUs">
                <div className = "second-block-title">{t("AboutUs.title")}</div>
                <p>{t("AboutUs.text1")}</p>
                <p>{t("AboutUs.text2")}<br/>{t("AboutUs.text3")}<br/>{t("AboutUs.text4")}</p>
                <div className = "second-block-conc">{t("AboutUs.text5")}</div>
            </div>
            <div className = "third-block" id = "cons">
                <div className = "third-block-title">{t("thirdblock.title1")}</div>
                <div className = "list-element">
                    <div className = "list-counter list-counter-add" >-</div>
                    <div className = "list-text">{t("thirdblock.text1")}</div>
                </div>
                <div className = "list-element">
                    <div className = "list-counter list-counter-add">-</div>
                    <div className = "list-text">{t("thirdblock.text2")}</div>
                </div>
                <div className = "list-element">
                    <div className = "list-counter">-</div>
                    <div className = "list-text">{t("thirdblock.text3")}</div>
                </div>
                <div className = "list-element">
                    <div className = "list-counter">-</div>
                    <div className = "list-text">{t("thirdblock.text4")}</div>
                </div>
                
            </div>
            <div className = "fourth-block">
                <div className = "fourth-block-title">{t("fourthblock.title1")}</div>
                <div className = "fourth-block-subtitle">{t("fourthblock.title2")}</div>
                <div className = "social-media">
                    <img src="../../content/inst-mob.svg"></img>
                    <img src="../../content/tg-mob.svg"></img>
                    <img src="../../content/post-mob.svg"></img>
                </div>
                <MobileForm />
            </div>
            <div className = "footer">
                <div className = "footer-title" style = {{marginTop:"5px"}}>{t("footer.title1")}</div>
                <div className = "contact-inf">
                    <div className = "contact-item">
                        <img src = "../../content/footer-post-mob.svg"></img>
                        <div>finwinpro@mail.ru</div>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-num-mob.svg"></img>
                        <div>+998 91 774 02 11</div>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-point-mob.svg"></img>
                        <div>{t("footer.text3")}</div>
                    </div>
                </div>
                <div className = "footer-title">{t("footer.title2")}</div>
                <div className = "contact-inf">
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <HashLink smooth to="/#AboutUs" className="contact-item-link">
                            {t("footer.text8")}
                        </HashLink>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <HashLink smooth to="/#cons" className="contact-item-link">
                            {t("footer.text5")}
                        </HashLink>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <HashLink smooth to="/finwinbudget#budget" className="contact-item-link">
                            {t("footer.text6")}
                        </HashLink>
                    </div>
                </div>
                <div className = "footer-title">{t("footer.title3")}</div>
                <div className = "contact-inf">
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <div>Instagram</div>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <div>WhatsApp</div>
                    </div>
                    <div className = "contact-item">
                        <img src = "../../content/footer-arrow-mob.svg"></img>
                        <div>Telegram</div>
                    </div>
                </div>
                <div style = {{marginTop:"25px"}}>
                    <div className = "politic">{t("footer.title4")}</div>
                    <div className = "politic">{t("footer.title5")}</div>
                </div>
                
            </div>

        </>
    );
}