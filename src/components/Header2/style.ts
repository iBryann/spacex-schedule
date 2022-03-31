import { createGlobalStyle } from 'styled-components';

export const Style = createGlobalStyle`
    .wrapper {
        text-align: center;
        height: 100%;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 86px;
        background-color: #fff;
        color: #333;
        box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
        transform: translateY(0);
        transition: transform 0.3s ease;
    }

    .header.hidden {
        transform: translateY(-110%);
    }

    .logo {
        margin: 0 24px;
        font-size: 28px;
        color: #f59596;
    }

    .links {
        padding: 0;
        margin: 0 24px;
    }

    .link-item {
        display: inline-block;
        margin: 0 12px;
        cursor: pointer;
    }

    .section {
        height: 100%;
        min-height: 2000px;
        background-color: rgb(245, 245, 245);
        padding-top: 131px;
        margin: 0 auto;
        padding: 130px 48px 24px;
    }

    .content {
        background-color: #d8d8d8;
        display: flex;
        flex-direction: column;
        max-width: 940px;
        margin: 0 auto;
        border-radius: 1px;
    }

    .main {
        display: flex;
        padding: 16px;
        padding-top: 0;
    }

    .main-left {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 800px;
        margin: 16px;
        color: #8b8b8b;
        background-color: rgb(245, 245, 245);
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .main-right {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 16px;
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        color: #8b8b8b;
    }

    .card-box {
        display: flex;
        flex: 1 1;
        justify-content: center;
        background-color: rgb(245, 245, 245);
        align-items: center;
        margin: 16px;
        height: 200px;
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }

    .right-box {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        margin: 16px 0;
        color: #8b8b8b;
        background-color: rgb(245, 245, 245);
        border-radius: 3px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .right-box:first-child {
        margin-top: 0;
    }

    .right-box:last-child {
        margin-bottom: 0;
    }
`;