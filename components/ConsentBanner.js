import { memo, useCallback, useState } from "react";
import classnames from "classnames";
// import noop from 'no-op';

const copy = {
  settings: "Cookie Settings",
  close: "close",
  description:
    "Ullamco deserunt dolore officia cillum ea culpa eu. Voluptate ex in commodo in dolor magna velit pariatur in nostrud enim tempor aliquip nisi.",
  purpose: {
    necessary: "necessary",
    preference: "preference",
    statistics: "statistics",
    marketing: "marketing",
  },
  defaultText: "We use cookies on this website to improve your experience.",
  accept: "Accept All",
  reject: "Reject All",
};

function CookieBanner({
  className,
  defaultText = copy.defaultText,
  acceptCta = copy.accept,
  rejectCta = copy.reject,
  cookieConsent,
  onUpdate,
  onAccept,
  onReject,
  children,
}) {
  const [cookieSettings, setCookieSettings] = useState(cookieConsent);
  const [showCookieSetting, setShowCookieSettings] = useState(false);

  const handleAcceptAllCookies = useCallback(() => {
    onAccept();
  }, [onAccept]);

  const handleDeclineAllCookies = useCallback(() => {
    onReject();
  }, [onReject]);

  const handleCookieSettingsClick = useCallback(() => {
    setShowCookieSettings(true);
  }, []);

  const handleCookieSettingsClose = useCallback(() => {
    setShowCookieSettings(false);
    onUpdate(cookieSettings);
  }, [onUpdate, cookieSettings]);

  const handleCookieUpdate = useCallback(
    (key, value) => {
      setCookieSettings({ ...cookieSettings, [key]: value });
    },
    [cookieSettings]
  );

  return (
    <div className={classnames(className)}>
      <p className="text-sm leading-4 text-white mb-7">
        {children || defaultText}
      </p>

      <div className="flex space-x-5">
        <button
          className="p-3 text-sm leading-4 text-current border-0 cursor-pointer whitespace-nowrap bg-[#0e0e0e]"
          onClick={handleAcceptAllCookies}
        >
          {acceptCta}
        </button>
        <button
          className="p-3 text-sm leading-4 text-current border-0 cursor-pointer whitespace-nowrap bg-[#0e0e0e]"
          onClick={handleDeclineAllCookies}
        >
          {rejectCta}
        </button>
        <button
          className="p-3 text-sm leading-4 text-current border-0 cursor-pointer whitespace-nowrap bg-[#0e0e0e]"
          onClick={handleCookieSettingsClick}
        >
          {copy.settings}
        </button>
      </div>

      {showCookieSetting && (
        <div className="absolute inset-0 bg-[#333333] text-left px-5 pt-4">
          <button
            className="absolute top-4 right-4 p-3 ml-5 text-sm leading-4 text-current border-0 cursor-pointer whitespace-nowrap bg-[#0e0e0e]"
            onClick={handleCookieSettingsClose}
          >
            {copy.close}
          </button>

          <div className="flex">
            <p className="w-1/2 text-xs">{copy.description}</p>

            <ul className="ml-4">
              <li className="space-x-1">
                <input
                  type="checkbox"
                  id="cookie-necessary"
                  checked={cookieSettings.necessary}
                  readOnly
                />
                <label htmlFor="cookie-necessary">
                  {copy.purpose.necessary}
                </label>
              </li>
              <li className="space-x-1">
                <input
                  type="checkbox"
                  id="cookie-preference"
                  checked={cookieSettings.preference}
                  onChange={(e) =>
                    handleCookieUpdate("preference", e.target.checked)
                  }
                />
                <label htmlFor="cookie-preference">
                  {copy.purpose.preference}
                </label>
              </li>
              <li className="space-x-1">
                <input
                  type="checkbox"
                  id="cookie-statistics"
                  checked={cookieSettings.statistics}
                  onChange={(e) =>
                    handleCookieUpdate("statistics", e.target.checked)
                  }
                />
                <label htmlFor="cookie-statistics">
                  {copy.purpose.statistics}
                </label>
              </li>
              <li className="space-x-1">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={cookieSettings.marketing}
                  onChange={(e) =>
                    handleCookieUpdate("marketing", e.target.checked)
                  }
                />
                <label htmlFor="cookie-marketing">
                  {copy.purpose.marketing}
                </label>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(CookieBanner);
