import { GEActionType } from './GETypes';

type GiveOnlineBankingInfo = {
  content: any;
  dispatch: any;
};

export default function GiveOnlineBankingInfo(props: GiveOnlineBankingInfo) {
  // TODO: STYLING
  const { content, dispatch } = props;
  return (
    <div style={{ height: 400 }}>
      <h1
        style={{
          fontSize: 24,
          lineHeight: '32px',
          fontWeight: 300,
        }}
      >
        {content?.header1}
      </h1>
      <div style={{ marginLeft: '1em' }}>
        <p
          onClick={() => dispatch({ type: 'NAVIGATE_TO_REQUEST_ACCOUNT' })}
          style={{
            marginBottom: 0,
            marginTop: 20,
            textIndent: '-1em',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          {content?.text1}
        </p>
        <p style={{ marginBottom: 0, textIndent: '-1em' }}>{content?.text2}</p>
        <p style={{ marginBottom: 0, textIndent: '-1em' }}>{content?.text3}</p>
        <p style={{ marginBottom: 0, textIndent: '-1em' }}>{content?.text4}</p>
        <p style={{ marginBottom: 0, textIndent: '-1em' }}>{content?.text5}</p>
        {content?.text5Options.map((option: string) => (
          <p style={{ textIndent: '2em', marginBottom: 0 }} key={option}>
            {option}
          </p>
        ))}
        <p style={{ marginBottom: 0, textIndent: '-1em' }}>{content?.text6}</p>

        <div
          style={{
            marginLeft: '-1em',
          }}
        >
          <p style={{ marginTop: 25, marginBottom: 55, fontWeight: 700 }}>
            {content?.text7}
          </p>
          <h1
            style={{
              fontSize: 24,
              lineHeight: '32px',
              fontWeight: 300,
            }}
          >
            {content?.header2}
          </h1>
          {content?.textLines2?.map((text: string, index: number) => {
            return (
              <p
                onClick={
                  index === content.textLines2.length - 1
                    ? () =>
                        dispatch({
                          type: GEActionType.NAVIGATE_TO_PREAUTHORIZED_WITHDRAWAL,
                        })
                    : () => null
                }
                style={
                  content.textLines2.length - 1 === index
                    ? {
                        marginBottom: 0,
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }
                    : { marginBottom: 0 }
                }
                key={text}
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
