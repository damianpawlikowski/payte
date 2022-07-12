import { createI18n } from "vue-i18n";

const messages = {
  en: {
    sidebar: {
      overview: "Overview",
      trade: "Buy / Sell",
      wallets: "Wallets",
      bundles: "Bundles",
      reporting: "Reporting",
      community: "Community",
      favorites: "Favorites",
    },
    topbar: {
      search: "Search",
    },
    dashboardCurrentBalance: {
      currentBalance: "Current Balance",
      vsLastMonth: "vs last month",
      quickInvest: "Quick Invest",
      showReport: "Show Report",
    },
    dashboardSummary: {
      summary: "Summary",
    },
    dashboardActionCentre: {
      summary: "Summary",
      table: "Table",
      charts: "Charts",
      reporting: "Reporting",
      analysis: "Analysis",
    },
    dashboardActionCentreSummary: {
      price: "Price",
      change: "Change",
      sell: "Sell",
      buy: "Buy",
      more: "More",
    },
  },
  pl: {
    sidebar: {
      overview: "Przeglądaj",
      trade: "Kup / Sprzedaj",
      wallets: "Portfele",
      bundles: "Kolekcje",
      reporting: "Raportowanie",
      community: "Społeczność",
      favorites: "Ulubione",
    },
    topbar: {
      search: "Szukaj",
    },
    dashboardCurrentBalance: {
      currentBalance: "Aktualny Balans",
      vsLastMonth: "w porównaniu do zeszłego miesiąca",
      quickInvest: "Szybka Inwestycja",
      showReport: "Pokaż Raport",
    },
    dashboardSummary: {
      summary: "Streszczenie",
    },
    dashboardActionCentre: {
      summary: "Streszczenie",
      table: "Tabele",
      charts: "Wykresy",
      reporting: "Raportowanie",
      analysis: "Analizy",
      price: "Cena",
      change: "Zmiana",
      sell: "Sprzedaj",
      buy: "Kup",
      more: "Więcej",
    },
    dashboardActionCentreSummary: {
      price: "Cena",
      change: "Zmiana",
      sell: "Sprzedaj",
      buy: "Kup",
      more: "Więcej",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "pl",
  messages,
});

export default i18n;
