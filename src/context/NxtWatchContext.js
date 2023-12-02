import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideosList: [],
  onSaveVideo: () => {},
  activeRoute: 'home',
  changeActiveRoute: () => {},
})
export default NxtWatchContext
