import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Footer from '../../components/footer/footer.component';
import Spinner from '../../components/spinner/spinner.component';

import { 
  CategoryWrapper,
  CategoryContainer, 
  Title,
  Slogan,
  FooterWrapper,
  PageWrapper, 
} from './category.styles';



type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    //console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <PageWrapper>

        <CategoryWrapper>
          
          <Title>{category.toUpperCase()}</Title>
          
          {isLoading ? (
            <Spinner />
            ) : (
              <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
          </CategoryContainer>
          )}

          <Slogan>WE ONLY PROVIDE WHAT YOU NEED NOTHING MORE & NOTHING LESS.</Slogan>

        </CategoryWrapper>
        
        <FooterWrapper>
          <Footer />
        </FooterWrapper>

      </PageWrapper>
    </Fragment>
  );
};

export default Category;