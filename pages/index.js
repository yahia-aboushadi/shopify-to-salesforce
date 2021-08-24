import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component{
  state = {open: false}
  render(){
    return(
      <Page
        title="Product Selection"
        primaryAction={{
          content: 'Select Products',
          onAction:() => this.setState({open: true})
        }}
    >
      <ResourcePicker
        resourceType="Product"
        open={this.state.open}
        onCancel = { () => this.setState({open: false})}
        onSelection={(resources) => this.handleSelection(resources)}
      />
      <p>Test 123456</p>
    </Page>

    )

  }
  handleSelection = (resources) => {
    const idFromResources = resources.selection.map((product) => product.id)
    this.setState({open: false})
    console.log(idFromResources);
  }
}

export default Index;
