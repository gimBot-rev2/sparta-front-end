import React, { Component } from 'react';
import Page from '../../components/Page';
import { MdAssignment } from "react-icons/md";
import { Card, CardBody, CardHeader, Button, Table } from 'reactstrap';
import PageSpinner from '../../components/PageSpinner'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOrders, updateStatus } from '../../store/order/action'
import routes from '../../config/routes'
import status from '../../constant/status'
import { filter, getCount } from '../../useCases' 
import { updateFilter } from '../../store/search/action'
import filters from '../../constant/filters'

const Order = ({ order, index, deliver }) => {
    return (
        <tbody>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{order.customer}</td>
                <td>{order.salesPerson}</td>
                <td>{order.shipmentAddress}</td>
                <td>{getCount(order.orderNumber)}</td>
                <td>{order.status}</td>
                <td align='left'>
                    <Button size='sm' color='primary'
                        onClick={() => deliver(order.orderNumber)}
                        disabled={order.status === "Delivered" ? true : false}
                    >
                        <MdAssignment /> {order.status === "Delivered" ? "Delivered" : "Deliever"}
                    </Button>
                </td>
                <td>
                    <Link to={{ pathname: routes.ViewSingleOrderPage, state: order }}>
                        <Button size='sm' color='primary'>
                            See Order
                        </Button>
                    </Link>
                </td>
            </tr>
        </tbody>
    )
}

class ViewAllOrdersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.deliver = this.deliver.bind(this)
    }

    componentDidMount() {
        this.props.getOrders()
        updateFilter('Type', null)
        updateFilter(filters.ADVANCED_DATE, null)
    }

    deliver(order) {
        this.props.updateStatus(order, { status: "Delivered" })
    }

    render() {
        if (this.props.loading) return <PageSpinner />
        const deliveredOrders = this.props.orders ? this.props.orders.filter((order) => { return order.status === status.delivered || order.status === status.issued }) : null
        if (deliveredOrders === null) return <h2>No orders to show</h2>

        const filtered = filter({
            name: { value: this.props.searchValue, tag: 'customer' },
            date: { value: this.props.filter[filters.DATE._type], tag: 'orderDate' },
            advancedDate: { value: this.props.filter[filters.ADVANCED_DATE], tag: 'orderDate' }
        }, deliveredOrders)
        return (
            <Page
                title="All Orders"
                breadcrumbs={[{ name: 'Logistics', active: true }]}
                className="TablePage"
                hasFilter={true}
                hasAdvancedDate={true}
            >
                <Card className="mb-3">
                    <CardHeader>All Created & Delivered Orders</CardHeader>
                    <CardBody>
                        <Table responsive >
                            <thead>
                                <tr align='left'>
                                    <th>SO#</th>
                                    <th>Customer</th>
                                    <th>Sales Person</th>
                                    <th>Shipment Address</th>
                                    <th>Order Number</th>
                                    <th>Status</th>
                                    <th style={{ margin: "auto" }}>Approve</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {filtered.map((item, index) => (
                                <Order order={item} key={index} index={index} deliver={this.deliver} />
                            ))}
                        </Table>
                    </CardBody>
                </Card>
            </Page>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.ordersReducer.loading,
        orders: state.ordersReducer.orders,
        status: state.ordersReducer.status,
        success: state.ordersReducer.success,
        filter: state.searchData.filter,
        searchValue: state.searchData.value
    }
}

export default connect(mapStateToProps, { getOrders, updateStatus, updateFilter })(ViewAllOrdersPage)