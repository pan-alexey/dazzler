import React from 'react';
import { Text, H1, H2, H3, H4, H5, H6 } from '@dazzler/text';

export const HeadingExample: React.FC = () => {
  return (
    <>
      <H1>H1. Heading Example</H1>
      <H2>H2. Heading Example</H2>
      <H3>H3. Heading Example</H3>
      <H4>H4. Heading Example</H4>
      <H5>H5. Heading Example</H5>
      <H6>H6. Heading Example</H6>
      <Text>Text example default size</Text>
      <Text size='large'>Text example large size</Text>
      <Text size='small'>Text example small size</Text>
    </>
  );
};
