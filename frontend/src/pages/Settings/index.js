import React from 'react';
import { View } from 'react-native';
import ReactDOM from 'react-dom';

const divMenuRight = {
  display: 'block',
  float: 'right',
  paddingBottom: '8px',
  marginBottom: '16px',
  borderBottom: '1px solid #e1e4e8',
  hairlineWidth: '50px',
  width: '75%',
  flexFlow: 'row wrap',
};

const divMenuLeft = {
  float: 'left',
  width: '25%',
};

const divMenuCenter = {
  float: 'center',
  width: '980px',
  margin: 'auto',
  padding: 'auto',
  //border: '1px solid',
  display: 'block',
};

const divitensNaviagations = {
  position: 'relative',
  display: 'block',
  padding: '8px 16px',
  color: '#1b1f23',
  // border: '1px solid #eaecef',
  cursor: 'pointer',
};

const divNavTopLeft = {
  marginBottom: '16px',
  listStyle: 'none',
  backgroundColor: '#fff',
  //border: '1px solid #e1e4e8',
  borderRadius: '6px',
}

const divNavBottomLeft = {
  marginBottom: '16px',
  backgroundColor: '#fff',
  //border: '1px solid #e1e4e8',
  display: 'block',
  boxSizing: 'border-box',
}

const divWholeCenter = {
  width: '66.66667%',
  paddingRight: '16px!important',
  paddingLeft: '16px!important',
  boxSizing: 'border-box',
  display: 'block',
}

const divWholeRight = {
  paddingright: '16px!important',
  paddingleft: '16px!important',
  display: 'inline-block!important',
  width: '33.33333%',
  boxsizing: 'border-box',
  float: 'right',
}

const divWholeRightAndLeft = {
  display: 'flex!important',
  flexShrink: '0!important',
  marginRight: '-16px',
  marginLeft: '-16px',
  boxSizing: 'border - box',
}

const divSubHeadPublicProfile = {
  display: 'flex',
  paddingBottom: '8px',
  marginBottom: '16px',
  borderBottom: '1px solid',
  flexFlow: 'row wrap',
  marginBottom: '0!important',
  marginTop: '0!important',
  boxSizing: 'border-box',
  //border: '1px solid',
}

const formGroup = {
  margin: '15px 0',
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
}

const editUser = {
  display: 'block',
  marginTop: '0em',
  boxSizing: 'border-box',
}

const formControl = {
  width: '440px',
  maxWidth: '100%',
  marginRight: '5px',
  backgroundColor: '#fafbfc',
  padding: '5px 12px',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#24292e',
  verticalAlign: 'middle',
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
  //border: '1px solid #e1e4e8',
  borderRadius: '6px',
  outline: 'none',
  boxShadow: 'inset 0 1px 0 rgba(225,228,232,.2)',
}

const note = {
  minHeight: '17px',
  margin: '4px 0 2px',
  fontSize: '12px',
  color: '#586069',
  boxSizing: 'border-box',
  display: 'block',
}

const label = {
  fontWeight: '600',
}

const dInlineBlock = {
  display: 'inline-block!important',
}

const dd = {
  marginLeft: '0',
}

const formSelect = {
  display: 'inline-block',
  maxWidth: '100%',
  height: '32px',
  paddingRight: '24px',
  backgroundColor: '#fff',
  backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMV…GzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
  backgroundSize: '8px 10px',
}



const Settings = () => {
  return (
    /* Div parent principal*/
    <div style={divMenuCenter} >

      {/* Div parent da div esquerda*/}
      <div style={divMenuLeft}>

        <nav style={divNavTopLeft}>
          {/* primeira div do bloco da div esquerda*/}
          <details>
            Personal Settings
        </details>
          <a style={divitensNaviagations}>Profile</a>
          <a style={divitensNaviagations}>Account</a>
          <a style={divitensNaviagations}>Account Security</a>
          <a style={divitensNaviagations}>Security Log</a>
          <a style={divitensNaviagations}>Emails </a>
        </nav>

        <nav style={divNavBottomLeft}>
          Developer Settings
        </nav>

      </div>

      {/* div parente da div direita*/}
      <div style={divMenuRight}>

        {/* primeira div do bloco da div direita*/}
        <div style={divSubHeadPublicProfile}>
          <h2>Public Profile</h2>
        </div>

        {/* segunda div do bloco da div direita*/}
        <div className="col-12" style={divWholeRightAndLeft}>

          <div className="col-8" style={divWholeCenter}>
            <form>
              <div>

                <dl style={formGroup}>
                  <dt>
                    <label style={label}>Name</label>
                  </dt>
                  <dd style={dd}>
                    <input value="Vinicius Fontes de Andrade" style={formControl}></input>
                    <div style={note}>
                      Your name may appear around GitHub where you contribute or are mentioned.
                      You can remove it at any time.
                    </div>
                  </dd>
                </dl>

                <dl style={formGroup}>
                  <dt>
                    <label style={label}>Public email</label>
                  </dt>
                  <dd style={dd} style={dInlineBlock}>
                    <div>
                      <select style={formSelect}>
                        <option value="select">Select a verified email to display</option>
                        <option value="vinicius.fontesdeandrade@gmail.com">vinicius.fontesdeandrade@gmail.com</option>
                      </select>

                      <p style={note}>
                        You can manage verified email addresses in your
                        <a href="">email settings</a>
                      </p>
                     
                    </div>
                  </dd>
                </dl>

                <dl style={formGroup}>
                  <dt></dt>
                  <dd></dd>
                </dl>

                <dl style={formGroup}>
                  <dt></dt>
                  <dd></dd>
                </dl>

                <dl style={formGroup}>
                  <dt></dt>
                  <dd></dd>
                </dl>

                <dl style={formGroup}>
                  <dt></dt>
                  <dd></dd>
                </dl>

              </div>
            </form>
          </div>

          <div className="col-4" style={divWholeRight}>
            <dl>
              <dt>
                <label>Profile Picture</label>
              </dt>
              <dd>
                <form style={editUser}></form>
                <div>Edit</div>
              </dd>
            </dl>
          </div>

        </div>

      </div>

    </div>
  )
}




export default Settings;