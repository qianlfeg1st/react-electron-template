
import React, { Component } from 'react'
import styles from './index.module.scss'
import ReactQr from 'react-awesome-qr'

class Home extends Component {
  render() {
    return (
      <div className={ styles.app }>
        {/*  */}
        <textarea value={ this.state.input } onChange={ this.input } data-type="input" placeholder="在这里填写需要生成二维码的任意内容" className={ styles.box } />

        {/* <button onClick={ this.generate } className={ styles.btn }>生成二维码</button> */}
        <div className={ styles.menu }>

          <div className={ styles.size }>
            <p>尺寸：</p>
            <input maxLength="3" type="text" data-type="inputSize" value={ this.state.inputSize } onChange={ this.input } />
          </div>

          <button onClick={ this.generate } className={ styles.btn }>生成二维码</button>

        </div>

        <div className={ styles.results }>结果</div>

        <div className={ styles.qrcode }>
          <ReactQr text={ this.state.text } size={ this.state.size } dotScale={ this.state.dotScale }  />
        </div>
      </div>
    )
  }

  componentDidMount () {

    document.title = `生成二维码`
  }

  componentWillUpdate (nextProps) {


  }

  constructor (props) {
    super(props)
    // this.input = this.input.bind(this)

    this.state = {
      input: '',
      inputSize: 200,
      text: '',
      size: 200,
      dotScale: 0.4,
      // bgSrc: require(`./logo.jpg`),
      // logoSrc: require(`./logo.jpg`)
    }
  }

  input = e => {

    this.setState({
      [e.target.dataset.type]: e.target.value
    })
  }

  generate = e => {

    this.setState({
      text: this.state.input,
      size: this.state.inputSize
    })
  }
}
export default Home
// export default CSSModules(Home, styles);