import { Helmet } from 'react-helmet-async';

import LetterView from 'src/sections/letter/LetterView';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Листи | ЕРЛ </title>
      </Helmet>

      <LetterView />
    </>
  );
}
