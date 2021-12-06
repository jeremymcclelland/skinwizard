import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris';
import React from 'react';
import Axios from 'axios';
import { useAppBridge } from '@shopify/app-bridge-react';
import { getSessionToken } from '@shopify/app-bridge-utils';

function updateMetaFields() {
  const app = useAppBridge();

  async function handleAction() {
    const token = await getSessionToken(app);
    const config = {
      headers: {Authorization: `Bearer ${token}`}
    }
    Axios.post(`https://0d5b-104-187-125-191.ngrok.io/script_tag`, {}, config);
    console.log('test');
  }
  return (
    <Page>
      <Layout.AnnotatedSection
        title="update metafields"
        description="update hardcoded customer metafields for test"
      >
        <SettingToggle
          action={{
            content:"update",
            onAction: handleAction
          }}
          enabled={true}
        >
          Update metafields <TextStyle variation="strong">Here</TextStyle>
        </SettingToggle>
      </Layout.AnnotatedSection>
    </Page>
  )
}

export default updateMetaFields;
