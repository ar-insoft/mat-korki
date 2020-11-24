import React from 'react';
import MathJax from 'react-mathjax2'

//const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
//const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$symbols$$ $$U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))$$ like $${ascii}$$`
const content = `abc $$f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi$$ $$ 1/3 $$`

const MyMathJax = ({rownanie}) => {
    console.log('MyMathJax', content, rownanie)
    console.log('MyMathJax', typeof content, typeof rownanie)
    return (
        <MathJax.Context
            input='ascii'
            onLoad={() => console.log("Loaded MathJax script!")}
            onError={(MathJax, error) => {
                console.warn(error);
                console.log("Encountered a MathJax error, re-attempting a typeset!");
                MathJax.Hub.Queue(
                    MathJax.Hub.Typeset()
                );
            }}
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
            options={{
                asciimath2jax: {
                    useMathMLspacing: true,
                    delimiters: [["$$", "$$"]],
                    preview: "none",
                }
            }}
        >
            <MathJax.Text text={rownanie} />
        </MathJax.Context>
    );
}

export default MyMathJax;