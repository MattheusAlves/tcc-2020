import React from 'react';
import { View } from 'react-native';

const pageContent = {
  paddingTop: '20px',
  width: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  boxSizing: 'border-box',
  display: 'block',
}

const col3 = {
  width: '25%',
  float: 'left !important',
  paddingRight: '24px !important,',
  boxSizing: 'border-box',
  display: 'block',
}

const col9 = {
  width: '75%',
  float: 'left !important',
  boxSizing: 'border-box',
  display: 'block',
}

const navMenuTop = {
  position: 'relative!important',
  marginBottom: '16px',
  listStyle: 'none',
  backgroundColor: '#fff',
  border: '1px solid #e1e4e8',
  borderRadius: '6px',
  display: 'block',
  boxSizing: 'border-box',
}

const menuHeadingDetails = {
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  display: 'block',
  padding: '8px 16px',
  marginTop: '0',
  marginBottom: '0',
  fontSize: 'inherit',
  fontWeight: '600',
  color: '#1b1f23',
  borderBottom: '1px solid #eaecef',
  boxSizing: 'border-box',
}

const summary = {
  display: 'list-item',
  listStyle: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
}

const selectMenu = {
  display: 'none!important',
  pointerEvents: 'none',
  flexDirection: 'column',
  zIndex: '99',
  position: 'absolute',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
  padding: '0',
  color: '#24292e!important',
  fontWeight: '400!important',
}

const SelectMenuMdal = {
  width: '300px',
  height: 'auto',
  maxHeight: '480px',
  margin: '8px 0 16px',
  fontSize: '12px',
  border: '1px solid #e1e4e8',
  borderRadius: '6px',
  boxShadow: '0 8px 24px rgba(149,157,165,.2)',
  animationName: 'SelectMenu-modal-animation--sm',
  position: 'relative',
  zIndex: '99',
  display: 'flex',
  overflow: 'hidden',
  pointerEvents: 'auto',
  flexDirection: 'column',
  backgroundColor: '#fff',
  animation: 'SelectMenu-modal-animation .12s cubic-bezier(0,.1,.1,1) backwards',
  boxSizing: 'border-box',
}

const SelectMenuHeader = {
  padding: '7px 7px 7px 16px',
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  borderBottom: '1px solid #eaecef',
  boxSizing: 'border-box',
  pointerEvents: 'auto',
}

const SelectMenuTitle = {
  fontCize: 'inherit',
  fontWeight: '600',
  flex: '1',
  boxSizing: 'border-box',
}

const dFlex = {
  display: 'flex!important1',
  minHeight: '101',
  flex: '1!important',
  flexDirection: 'column!important',
  boxSizing: 'border-box',
}

const selectMenuList = {
  position: 'relative',
  padding: '0',
  margin: '0 0 -1px',
  flex: 'auto',
  overflowX: 'hidden',
  overflowY: 'auto',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  display: 'block',
  listStyleType: 'disc',
  marginBlockStart: '1em;',
  marginBlockEnd: '1em;',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  paddingInlineStart: '40px',
}

const selectMenuItem = {
  borderBottom: '0',
  paddingTop: '7px',
  paddingBottom: '7px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '16px',
  overflow: 'hidden',
  color: '#24292e',
  textAlign: 'left',
  cursor: 'pointer',
  backgroundColor: '#fff',
  border: '0',
  textDecoration: 'none',
}

const navMenuBottom = {
  marginBottom: '16px',
  listStyle: 'none',
  backgroundColor: '#fff',
  border: '1px solid #e1e4e8',
  borderRadius: '6px',
  display: 'block;',
  boxSizing: 'border-box',
}

const menuItem = {
  borderBottomLeftRadius: '6px',
  borderBottom: '0',
  borderBottomRightRadius: '6px',
  borderTopLeftRadius: '6px',
  borderTop: '0',
  borderTopRightRadius: '6px',
  position: 'relative',
  display: 'block',
  padding: '8px 16px',
  color: '#1b1f23',
  textDecoration: 'none',
  backgroundColor: 'initial',
  boxSizing: 'border-box',
  cursor: 'pointer',
}

const subhead = {
  display: 'flex',
  paddingBottom: '8px',
  borderBottom: '1px solid #e1e4e8',
  flexFlow: 'row wrap',
  marginBottom: '0!important',
  marginTop: '0!important',
  boxSizing: 'border-box',
}

const clearFix = {
  display: 'flex!important',
  flexShrink: '0!important',
  marginRight: '-16px',
  marginLeft: '-16px',
  boxSizing: 'border-box',
}

const SubheadSpacious = {
  marginTop: '40px',
  display: 'flex',
  paddingBottom: '8px',
  marginBottom: '16px',
  borderBottom: '1px solid #e1e4e8',
  flexFlow: 'row wrap',
  boxSizing: 'border-box',
}

const editUser = {
  boxSizing: 'border-box',
  display: 'block',
  marginTop: '0em',
}

const dInlineBlock = {
  display: 'inline-block!important',
  boxSizing: 'border-box',
}

const jsSelectedNavigation = {
  position: 'relative',
  display: 'block',
  padding: '8px 16px',
  color: '#1b1f23',
  borderBottom: '1px solid #eaecef',
  textDecoration: 'none',
  backgroundColor: 'initial',
  boxSizing: 'border-box',
  cursor: 'pointer',
}

const subheadHeading = {
  fontSize: '24px',
  fontWeight: '400',
  flex: '1 1 auto',
  marginTop: '0',
  marginBottom: '0',
  boxSizing: 'border-box',
  display: 'block',
  marginBlockStart: '0.83em',
  marginBlockEnd: '0.83em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
}

const col8 = {
  paddingRight: '16px!important',
  paddingLeft: '16px!important',
  width: '66.66667%',
  boxSizing: 'border-box',
  display: 'block',
}

const col4 = {
  paddingRight: '16px!important',
  paddingLeft: '16px!important',
  display: 'inline-block!important',
  width: '33.33333%',
  boxSizing: 'border-box',
}

const dBlockMb2 = {
  display: 'block!important',
  marginBottom: '8px!important',
  fontWeight: '600',
  boxSizing: 'border-box',
  cursor: 'default',
}

const avatarUploadContainer = {
  position: 'relative!important',
  marginLeft: '0',
  boxSizing: 'border-box',
  display: 'block',
  marginInlineStart: '40px',
}

const avatarUpload = {
  boxSizing: 'border-box',
  display: 'block',
}

const formGroup = {
  margin: '115px 01',
  boxSizing: 'border-box',
  display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
}

const Settings = () => {
  return (
    <div style={pageContent}>
      <div style={col3}>
        <nav style={navMenuTop}>
          <details style={menuHeadingDetails}>
            <summary style={summary}></summary>
            <details style={selectMenu}>
              <div style={SelectMenuMdal}>
                <header style={SelectMenuHeader}>
                  <span style={SelectMenuTitle}>Switch settings context</span>
                </header>
                <fuzzy-list style={dFlex}>
                  <ul style={selectMenuList}>
                    <li>
                      <a style={selectMenuItem}></a>
                    </li>
                  </ul>
                </fuzzy-list>
              </div>
            </details>
          </details>
          <a style={jsSelectedNavigation}>Profile</a>
          <a style={jsSelectedNavigation}>Account</a>
          <a style={jsSelectedNavigation}>Account Security</a>
          <a style={jsSelectedNavigation}>Security Log</a>
          <a style={jsSelectedNavigation}>Security</a>
          <a style={jsSelectedNavigation}>Emails</a>
          <a style={jsSelectedNavigation}>Notifications</a>
          <a style={jsSelectedNavigation}>Applications</a>
          <a style={jsSelectedNavigation}>Organizations</a>
        </nav>
        <nav style={navMenuBottom}>
          <a style={menuItem}>Developer settings</a>
        </nav>
      </div>
      <div style={col9}>
        <div style={subhead}>
          <h2 style={subheadHeading}>Public profile</h2>
        </div>
        <div style={clearFix}>
          <div style={col8}>
            <form style={editUser}>
              <input type="hidden" name="_method" value="put"></input>
              <input type="hidden" name="_method" value="put"></input>
              <div>
                <dl style={formGroup}>
                  <dt>
                    <label>Name</label>
                  </dt>
                </dl>
                <dl style={formGroup}>
                  <dt>
                    <label>Public email</label>
                  </dt>
                </dl>
                <dl style={formGroup}>
                  <dt>
                    <label>Bio</label>
                  </dt>
                </dl>
                <dl style={formGroup}>
                  <dt>
                    <label>URL</label>
                  </dt>
                </dl>
                <dl style={formGroup}>
                  <dt>
                    <label>Twitter username</label>
                  </dt>
                </dl>
                <dl style={formGroup}>
                  <dt>
                    <label>Company</label>
                  </dt>
                </dl>
              </div>
            </form>
          </div>
          <div style={col4}>
            <dl>
              <dt>
                <label style={dBlockMb2}></label>
              </dt>
              <dd style={avatarUploadContainer}>
                <form style={editUser}>
                  <input></input>
                  <input></input>
                  <file-attachment>
                    <input></input>
                    <input></input>
                    <div></div>
                  </file-attachment>
                </form>
                <div style={avatarUpload}></div>
              </dd>
            </dl>
          </div>
        </div>
        <div style={SubheadSpacious}></div>
        <form style={editUser}></form>
        <div style={dInlineBlock}></div>
        <div style={SubheadSpacious}></div>
      </div>
    </div>
  )
}

export default Settings;