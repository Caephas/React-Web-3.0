// https://eth-ropsten.alchemyapi.io/v2/ByNZGCVXRbbIpgi5Nv3IVLmGe7kNuj6b

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ByNZGCVXRbbIpgi5Nv3IVLmGe7kNuj6b',
      accounts: ['531cb97cd2ebcba7f7683088e672df2c053808cf9ddf7b5a7af6acbbf677289f']
    }
  }
}