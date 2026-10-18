/**
 * M6: MariFlow currency conversion and formatting.
 * Transaction amounts and budgets remain stored in RWF.
 */

const CURRENCY_STORAGE_KEY = "mariflow.displayCurrency";
const RATES_STORAGE_KEY = "mariflow.exchangeRates";

const DEFAULT_RATES = {
    USD: 1460,
    EUR: 1600
};

export function getCurrencySettings() {
    let savedRates = {};

    try {
        const storedRates = localStorage.getItem(
            RATES_STORAGE_KEY
        );

        const parsedRates = JSON.parse(storedRates || "{}");

        if (
            parsedRates &&
            typeof parsedRates === "object" &&
            !Array.isArray(parsedRates)
        ) {
            savedRates = parsedRates;
        }
    } catch {
        savedRates = {};
    }
    const savedUSD = Number(savedRates.USD);
    const savedEUR = Number(savedRates.EUR);

    const rates = {
        USD:
            Number.isFinite(savedUSD) && savedUSD > 0
                ? savedUSD
                : DEFAULT_RATES.USD,
        EUR:
            Number.isFinite(savedEUR) && savedEUR > 0
                ? savedEUR
                : DEFAULT_RATES.EUR
    };

    let savedCurrency = null;

    try {
        savedCurrency = localStorage.getItem(
            CURRENCY_STORAGE_KEY
        );
    } catch {
        //Use  the default currency if sorage is unavailable.
    }

    const currency = ["RWF", "USD", "EUR"].includes(savedCurrency)
        ? savedCurrency
        : "RWF";

    return { currency, rates };
}

    function convertAmount(amount, currency, rates) {
        const value = Number(amount);

        if (!Number.isFinite(value)) {
            return 0;
        }

        if (currency === "USD") {
            return value / rates.USD;
        }

        if (currency === "EUR") {
            return value / rates.EUR;
        }

        return value;
    }

    export function convertFromRWF (amount) {
        const { currency, rates } = getCurrencySettings();

        return convertAmount(amount, currency, rates);
    }

    export function formatCurrency(amount) {
        const { currency, rates } = getCurrencySettings();

        const convertedAmount = convertAmount(
            amount,
            currency,
            rates
        );

        const locale = {
            RWF: "en-RW",
            USD: "en-US",
            EUR: "en-IE"
        }[currency];

        return `${currency} ${new Intl.NumberFormat(locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(convertedAmount)}`;
    }

    export function saveExchangeRates(usdRate, eurRate) {
        const USD = Number(usdRate);
        const EUR = Number(eurRate);

        if (
            !Number.isFinite(USD) ||
            !Number.isFinite(EUR) ||
            USD <= 0 ||
            EUR <= 0
        ) {
            return false;
        }

        try {
            localStorage.setItem(
                RATES_STORAGE_KEY,
                JSON.stringify({ USD, EUR })
            );

            return true;
        } catch {
            return false;
        }
    }