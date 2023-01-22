import Image from "next/image";
import { FC } from "react";

import style from './Intership.module.scss';

export const Intership:FC = () => {


    return (
        <div className={style.Internship__container}>
            <h2>Ищешь стажировку?</h2>
            <div className={style.Internship__flexContainer}>
                <div className={style.Internship__image}>
                    <Image className={style.Internship__image_img} width={603} height={456} src="/img/internship.png" alt="Internship image"/>
                </div>
                <ul className={style.Internship__list}>
                    <li className={style.Internship__item}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                            <path d="M48.4475 35.2895V26.7368M48.4475 26.7368L32.0001 18.1842L15.5527 26.7368L32.0001 35.2895L40.2835 31.4663M48.4475 26.7368L40.2835 31.4663M23.4475 31.3421V41.4737C23.5791 44.6316 27.3948 46.2105 32.0001 46.2105C36.6054 46.2105 40.5527 45.3374 40.5527 41.4737V31.3421L40.2835 31.4663" stroke="#274B90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className={style.Internship__content}>
                            <h3>Присоединяйся к нам</h3>
                            <p>На нашей платформе регистрируются работодатели, которые ищут студентов – таких, как ты</p>
                        </div>
                    </li>
                    <li className={style.Internship__item}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                            <path d="M30.333 27H33.6663V23.6666H30.333M31.9997 45.3333C24.6497 45.3333 18.6663 39.35 18.6663 32C18.6663 24.65 24.6497 18.6666 31.9997 18.6666C39.3497 18.6666 45.333 24.65 45.333 32C45.333 39.35 39.3497 45.3333 31.9997 45.3333ZM31.9997 15.3333C29.811 15.3333 27.6437 15.7644 25.6216 16.602C23.5995 17.4396 21.7622 18.6672 20.2146 20.2149C17.089 23.3405 15.333 27.5797 15.333 32C15.333 36.4203 17.089 40.6595 20.2146 43.7851C21.7622 45.3327 23.5995 46.5604 25.6216 47.398C27.6437 48.2355 29.811 48.6666 31.9997 48.6666C36.42 48.6666 40.6592 46.9107 43.7848 43.7851C46.9104 40.6595 48.6663 36.4203 48.6663 32C48.6663 29.8113 48.2352 27.644 47.3977 25.6219C46.5601 23.5998 45.3324 21.7625 43.7848 20.2149C42.2371 18.6672 40.3998 17.4396 38.3777 16.602C36.3556 15.7644 34.1884 15.3333 31.9997 15.3333ZM30.333 40.3333H33.6663V30.3333H30.333V40.3333Z" fill="#274B90"/>
                        </svg>
                        <div className={style.Internship__content}>
                            <h3>Расскажи о себе</h3>
                            <p>Указывай в резюме свои навыки – система подберет подходящие вакансии</p>
                        </div>
                    </li>
                    <li className={style.Internship__item}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="64" rx="16" fill="#E1EBFF"/>
                            <path d="M21.9997 27H16.9997C16.083 27 15.333 26.25 15.333 25.3334C15.333 24.4167 16.083 23.6667 16.9997 23.6667H21.9997C22.9163 23.6667 23.6663 24.4167 23.6663 25.3334C23.6663 26.25 22.9163 27 21.9997 27ZM21.9997 32H16.9997C16.083 32 15.333 32.75 15.333 33.6667C15.333 34.5834 16.083 35.3334 16.9997 35.3334H21.9997C22.9163 35.3334 23.6663 34.5834 23.6663 33.6667C23.6663 32.75 22.9163 32 21.9997 32ZM45.133 42.4834L39.933 37.2834C38.4997 38.2167 36.783 38.75 34.933 38.65C30.983 38.4667 27.5997 35.3834 27.0663 31.4667C26.8903 30.1649 27.0237 28.84 27.4558 27.5994C27.8878 26.3589 28.6062 25.2377 29.5528 24.3268C30.4994 23.416 31.6474 22.7412 32.9036 22.3571C34.1599 21.9731 35.489 21.8908 36.783 22.1167C40.033 22.6667 42.733 25.2 43.4497 28.4167C43.9997 30.85 43.4663 33.1167 42.283 34.9167L47.4997 40.1334C48.1497 40.7834 48.1497 41.8334 47.4997 42.4834C46.8497 43.1334 45.783 43.1334 45.133 42.4834ZM40.333 30.3334C40.333 27.5834 38.083 25.3334 35.333 25.3334C32.583 25.3334 30.333 27.5834 30.333 30.3334C30.333 33.0834 32.583 35.3334 35.333 35.3334C38.083 35.3334 40.333 33.0834 40.333 30.3334ZM16.9997 43.6667H30.333C31.2497 43.6667 31.9997 42.9167 31.9997 42C31.9997 41.0834 31.2497 40.3334 30.333 40.3334H16.9997C16.083 40.3334 15.333 41.0834 15.333 42C15.333 42.9167 16.083 43.6667 16.9997 43.6667Z" fill="#274B90"/>
                        </svg>
                        <div className={style.Internship__content}>
                            <h3>Найди работу своей мечты</h3>
                            <p>Выбирай лучшие предложения по отзывам о компании</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}