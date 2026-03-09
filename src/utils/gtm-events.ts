// GTM Event Tracking Utility

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventAction: string,
  eventLabel?: string
) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      eventCategory,
      eventAction,
      eventLabel,
    });
  }
};

// Social Media Click Events
export const trackSocialClick = (platform: string, username?: string) => {
  trackEvent('social_click', 'Social Media', `Click ${platform}`, username);
};

// Menu Click Events
export const trackMenuClick = (menuName: string) => {
  trackEvent('menu_click', 'Navigation', 'Click Menu', menuName);
};

// Download Click Events
export const trackDownloadClick = (fileName?: string) => {
  trackEvent('download_click', 'Download', 'Click Download CV', fileName);
};

// Portfolio Click Events
export const trackPortfolioClick = (portfolioName: string) => {
  trackEvent('portfolio_click', 'Portfolio', 'Click Portfolio', portfolioName);
};

// Certificate Click Events
export const trackCertificateClick = (certificateName: string) => {
  trackEvent('certificate_click', 'Certificate', 'Click Certificate', certificateName);
};

// Contact Click Events
export const trackEmailClick = (email?: string) => {
  trackEvent('contact_click', 'Contact', 'Click Email', email);
};

export const trackWhatsAppClick = (phone?: string) => {
  trackEvent('contact_click', 'Contact', 'Click WhatsApp', phone);
};
