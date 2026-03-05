
export const PIXEL_ID = '465757401603677';
export const GTAG_ID = 'AW-10822615285';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
    dataLayer: any[];
  }
}

export const trackPageView = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
  if (typeof window.gtag === 'function') {
    window.gtag('config', GTAG_ID, {
      page_path: window.location.pathname,
    });
  }
};

export const trackViewContent = (contentName: string) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', { content_name: contentName });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'view_item', {
      items: [{ item_name: contentName }]
    });
  }
};

export const trackLead = (contentName: string) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { content_name: contentName });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      content_name: contentName
    });
  }
};

export const trackInitiateCheckout = (value: number, currency: string = 'BRL') => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { value, currency });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'begin_checkout', {
      value,
      currency,
      items: [{ item_name: 'E-book ZeroCaloria', price: value }]
    });
  }
};

export const trackPurchase = (value: number, currency: string = 'BRL') => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Purchase', { value, currency });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: `order_${Date.now()}`,
      value,
      currency,
      items: [{ item_name: 'E-book ZeroCaloria', price: value }]
    });
  }
};
