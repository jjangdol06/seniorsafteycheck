import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScrollableList.scss';
import { NavLink } from 'react-router-dom';

class ScrollableList extends Component {
  static propTypes = {
    listItems: PropTypes.array.isRequired,
    personName: PropTypes.string,
    heightOfItem: PropTypes.number,
    maxItemsToRender: PropTypes.number,
    style: PropTypes.object
  }
  static defaultProps = {
    listItems: [],
    heightOfItem: 30,
    maxItemsToRender: 50
  }

  constructor(props) {
    super(props)
    this.state = { scrollPosition: 0 }
    this.list = null

    this.setListRef = element => {
      this.list = element
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateScrollPosition = this.updateScrollPosition.bind(this)
  }
  
  handleClick() {
    this.props.personName = this.props.listItems.content;
  }
  componentDidMount() {
    this.list.addEventListener('scroll', this.updateScrollPosition)
  }
  componentWillUnmount() {
    this.list.removeEventListener('scroll', this.updateScrollPosition)
  }
  updateScrollPosition() {
    const newScrollPosition = this.list.scrollTop / this.props.heightOfItem
    const difference = Math.abs(this.state.scrollPosition - newScrollPosition)

    if (difference >= this.props.maxItemsToRender / 5) {
      this.setState({ scrollPosition: newScrollPosition })
    }
  }
  render() {
    const startPosition = this.state.scrollPosition -
      this.props.maxItemsToRender >
      0
      ? this.state.scrollPosition - this.props.maxItemsToRender
      : 0

    const endPosition = this.state.scrollPosition +
      this.props.maxItemsToRender >=
      this.props.listItems.length
      ? this.props.listItems.length
      : this.state.scrollPosition + this.props.maxItemsToRender

    return (
      <div className="react-scrollable-list" ref={this.setListRef} style={this.props.style}>
        <div
          key="list-spacer-top"
          style={{
            height: startPosition * this.props.heightOfItem
          }}
        />
        {this.props.listItems.slice(startPosition, endPosition).map(item => (
          <NavLink to={`/management/${item.id}`}>
            <div
              onClick={this.handleClick}
              className="react-scrollable-list-item"
              key={'list-item-' + item.id}>
                {item.content}
            </div>
          </NavLink>
        ))}
        <div
          key="list-spacer-bottom"
          style={{
            height: this.props.listItems.length * this.props.heightOfItem -
              endPosition * this.props.heightOfItem
          }}
        />
      </div>
    )
  }
}

export default ScrollableList;