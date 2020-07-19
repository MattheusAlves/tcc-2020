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
  float: 'left!important',
  paddingRight: '24px!important,',
  boxSizing: 'border-box',
  display: 'block',
}

const col9 = {
  width: '75%',
  float: 'left!important',
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

const navMenuBottom = {
  marginBottom: '16px',
  listStyle: 'none',
  backgroundColor: '#fff',
  border: '1px solid #e1e4e8',
  borderRadius: '6px',
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
  display:'flex',
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
          <a></a>
          <a></a>
          <a></a>
        </nav>


        <nav style={navMenuBottom}>

        </nav>

      </div>

      <div style={col9}>

      </div>

    </div>
  )
}

export default Settings;