import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё',
        },
        {
          key: 'hat',
          name: 'Шляпы',
        },
        {
          key: 'shoes',
          name: 'Обувь',
        },
        {
          key: 'dress',
          name: 'Платье',
        },
      ],
    };
  }

  handleCategoryClick = (categoryKey) => {
    this.props.chooseCategory(categoryKey);
  };

  componentDidMount() {
    const selectedCategory = localStorage.getItem('selectedCategory');
    if (selectedCategory) {
      this.handleCategoryClick(selectedCategory);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      localStorage.setItem('selectedCategory', this.props.selectedCategory);
    }
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.handleCategoryClick(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
