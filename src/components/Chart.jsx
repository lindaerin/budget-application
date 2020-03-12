import React, { Component } from "react";
import "./Chart.scss";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      chartData: {
        datasets: [
          {
            data: this.props.foodBreakdown,
            labels: [
              "Fruits",
              "Vegetables",
              "Proteins",
              "Dairy",
              "Drinks",
              "Carbohydrates",
              "Others"
            ],
            backgroundColor: [
              "rgba(255, 0, 0, 0.4)",
              "rgba(11, 156, 49, 0.4)",
              "rgba(245, 137, 102, 1)",
              "rgba(102, 171, 245, 1)",
              "rgba(102, 106, 245, 1)",
              "rgba(252, 224, 202, 1)",
              "rgba(206, 198, 192, 1)"
            ]
          }
        ],
        labels: [
          "Fruits",
          "Vegetables",
          "Proteins",
          "Dairy",
          "Drinks",
          "Carbohydrates",
          "Others"
        ]
      }
    };
  }

  componentDidMount() {
    axios
      .get("/api/pantry", {
        params: {
          user_id: this.state.user_id
        }
      })
      .then(res1 => {
        console.log(res1);
        let total = 0;
        let fruits = 0;
        let vegetables = 0;
        let proteins = 0;
        let dairy = 0;
        let drinks = 0;
        let carbs = 0;
        let others = 0;
        for (var i = 0; i < res1.data.length; ++i) {
          console.log(res1.data[i].food_type);
          switch (res1.data[i].food_type) {
            case "fruits":
              total += res1.data[i].price;
              fruits += res1.data[i].price;
              break;
            case "vegetables":
              total += res1.data[i].price;
              vegetables += res1.data[i].price;
              break;
            case "proteins":
              total += res1.data[i].price;
              proteins += res1.data[i].price;
              break;
            case "dairy":
              total += res1.data[i].price;
              dairy += res1.data[i].price;
              break;
            case "drinks":
              total += res1.data[i].price;
              drinks += res1.data[i].price;
              break;
            case "carbs":
              total += res1.data[i].price;
              carbs += res1.data[i].price;
              break;
            case "others":
              total += res1.data[i].price;
              others += res1.data[i].price;
              break;
            default:
              break;
          }
        }
        let f = parseInt((fruits / total) * 100);
        let v = parseInt((vegetables / total) * 100);
        let p = parseInt((proteins / total) * 100);
        let d = parseInt((dairy / total) * 100);
        let dr = parseInt((drinks / total) * 100);
        let c = parseInt((carbs / total) * 100);
        let o = parseInt((others / total) * 100);

        let foodBreakdown = [f, v, p, d, dr, c, o];
        console.log(foodBreakdown);
        let new_data = this.state.chartData;
        new_data.datasets[0].data = foodBreakdown;
        this.setState({
          data: new_data
        });
      });
  }

  render() {
    return (
      <div className="chart-container">
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={40}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            title: {
              display: true,
              text: this.props.title,
              fontSize: 25,
              text: "Weekly Grocery Breakdown"
            },
            legend: {
              display: true,
              position: "left",
              align: "center"
            }
          }}
        />
      </div>
    );
  }
}

// Chart.defaultProps = {
//   title:
// };

export default Chart;
