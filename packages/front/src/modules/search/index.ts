import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getQuote } from "./actions";
import Search from "./components";


const mapStateToProps = (state: any) => ({
  quote: state.search.quote,
  isBusy: state.search.isBusy
});
  
const mapDispatchToProps = (dispatch: any) => ({
  getQuote: bindActionCreators(getQuote, dispatch),
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

