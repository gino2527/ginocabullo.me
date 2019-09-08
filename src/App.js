import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailDone: false,
      emailHTML: '<span>email<span class="equal">=</span><span>{<a href="mailto:me@ginocabullo.me">`me@ginocabullo.me`</a>}</span></span>',
      fbDone: false,
      fbHTML: '<span>facebook<span class="equal">=</span><span>{<a href="https://facebook.com/ginocabullo" target="_blank">`ginocabullo`</a>}</span></span>',
      forRender: [
        '<Gino',
        'email={`me@ginocabullo.me`}',
        'facebook={`ginocabullo`}',
        'github={`gino2527`}',
        'instagram={`ginocabullo`}',
        'linkedin="Gino Rodolfo Cabullo"',
        'twitter={`theginocabullo`}',
        '/>'
      ],
      ghDone: false,
      ghHTML: '<span>github<span class="equal">=</span><span>{<a href="https://github.com/gino2527" target="_blank">`gino2527`</a>}</span></span>',
      igDone: false,
      igHTML: '<span>instagram<span class="equal">=</span><span>{<a href="https://instagram.com/ginocabullo" target="_blank">`ginocabullo`</a>}</span></span>',
      liDone: false,
      liHTML: '<span>linkedin<span class="equal">=</span><span><a href="https://www.linkedin.com/in/gino-rodolfo-cabullo-b1077614a/" target="_blank">"Gino Rodolfo Cabullo"</a></span></span>',
      openDone: false,
      openHTML: '<span><span class="open"><</span>Gino</span>',
      renderedName: [],
      renderIndex: 0,
      twDone: false,
      twHTML: '<span>twitter<span class="equal">=</span><span>{<a href="https://twitter.com/theginocabullo" target="_blank">`theginocabullo`</a>}</span></span>',
    };
  }

  addToRenderedName = () => {
    const { forRender, renderedName } = this.state;
    let { renderIndex } = this.state;

    const current = (
      renderedName[renderIndex]
        ? renderedName[renderIndex]
        : ''
    );
    if (
      renderIndex < forRender.length &&
      (current.length !== forRender[renderIndex].length)
    ) {
      renderedName[renderIndex] = (
        forRender[renderIndex].slice(0, current.length + 1)
      );

      this.setState({
        renderedName,
      });
    } else {
      if (renderIndex !== forRender.length) {
        renderIndex += 1;

        const addtlState = {};
        switch (renderIndex) {
          case 1:
            addtlState.openDone = true;
            break;
          case 2:
            addtlState.emailDone = true;
            break;
          case 3:
            addtlState.fbDone = true;
            break;
          case 4:
            addtlState.ghDone = true;
            break;
          case 5:
            addtlState.igDone = true;
            break;
          case 6:
            addtlState.liDone = true;
            break;
          case 7:
            addtlState.twDone = true;
            break;
          default:
            break;
        }

        this.setState({
          renderIndex,
          ...addtlState,
        }, () => {
          this.addToRenderedName();
        });
      } else {
        this.setState({
          doneRender: true,
        }, () => {
          this.timer && clearInterval(this.timer);
        });
      }
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.addToRenderedName();
    }, 50);
  }

  handleSkipAnimation = () => {
    const { forRender: renderedName } = this.state;

    this.setState({
      emailDone: true,
      fbDone: true,
      ghDone: true,
      igDone: true,
      liDone: true,
      openDone: true,
      renderedName,
      twDone: true,
    })
  }

  render() {
    const {
      doneRender,
      emailDone,
      emailHTML,
      fbDone,
      fbHTML,
      forRender,
      ghDone,
      ghHTML,
      igDone,
      igHTML,
      liDone,
      liHTML,
      openDone,
      openHTML,
      renderedName,
      renderIndex,
      twDone,
      twHTML,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span>
              {
                renderedName.map((name, index) => {
                  if (index === 0 && openDone) {
                    return (
                      <div
                        className="initial"
                        dangerouslySetInnerHTML={{
                          __html: openHTML,
                        }}
                      />
                    )
                  } else if (index === 1 && emailDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: emailHTML,
                        }}
                      />
                    )
                  } else if (index === 2 && fbDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: fbHTML,
                        }}
                      />
                    )
                  } else if (index === 3 && ghDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: ghHTML,
                        }}
                      />
                    )
                  } else if (index === 4 && igDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: igHTML,
                        }}
                      />
                    )
                  } else if (index === 5 && liDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: liHTML,
                        }}
                      />
                    )
                  } else if (index === 6 && twDone) {
                    return (
                      <div
                        className="indent"
                        dangerouslySetInnerHTML={{
                          __html: twHTML,
                        }}
                      />
                    )
                  }

                  return (
                    <div
                      className={
                        (
                          (index > 0 && index < renderedName.length - 1)
                          || (index > 0 && renderIndex !== forRender.length - 1 && !doneRender)
                        )
                          ? 'indent'
                          : (
                            index === renderedName.length - 1
                              ? 'inline'
                              : 'initial'
                          )
                      }
                    >
                      <span>
                        {name}
                      </span>
                    </div>
                  );
                })
              }
              {doneRender && (
                <span className="blink">|</span>
              )}
            </span>
          </h1>
        </header>
        <button
          className="skip"
          onClick={this.handleSkipAnimation}
          type="button"
        >
          skip animation
        </button>
      </div>
    );
  }
}

export default App;
