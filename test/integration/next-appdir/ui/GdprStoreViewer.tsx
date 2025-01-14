"use client";

import { useGdprStore } from "@codegouvfr/react-dsfr/useGdprStore"
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { consentModalNativeButtonProps } from '@codegouvfr/react-dsfr/ConsentBanner';

export const GdprStoreViewer = () => {
    const {consents, firstChoiceMade } = useGdprStore();

    return <>
        <ButtonsGroup inlineLayoutWhen='always' buttons={[
            {
                "nativeButtonProps": consentModalNativeButtonProps,
                children: "Open Consent"
            },
            {
                children: "Reset Consent",
                priority: "secondary",
                onClick() {
                    localStorage.removeItem("dsfr-gdpr-consent");
                    location.reload();
                }
            }
        ]} />
        <pre>{JSON.stringify({consents, firstChoiceMade})}</pre>
    </>;
}