import { tags, burgerMenu } from "./global.js";
//
tags("G-51X56D0747");
// navbar
burgerMenu(".burger", ".nav__menu");
// navbar top slider
if (document.querySelector(".navbar__scroll")) {
  new Swiper(".navbar__scroll", {
    direction: "horizontal",
    loop: !0,
    slidesPerView: "auto",
    spaceBetween: 12,
    freeMode: true,
    speed: 30000,
    freeModeMomentum: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });
}
// missing chart
if (document.querySelector(".chart")) {
  const charts = document.querySelectorAll(".chart");
  for (const chart of charts) {
    const chartMob = document.querySelector(".missing__chart-mob");
    const plugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
    new Chart(chart, {
      type: "bar",
      data: {
        labels: [
          "",
          "2018",
          "",
          "2020",
          "",
          "2022",
          "",
          "",
          "2024",
          "",
          "2026",
        ],
        datasets: [
          {
            label: false,
            data: [
              13.63, 20.21, 22.02, 24.57, 29.84, 36.41, 44.28, 51.01, 57.2,
              63.97, 71.21,
            ],
            borderWidth: 1,
            borderColor: "#FEC200",
            backgroundColor: "#FEC200",
            borderRadius: 11,
          },
        ],
      },
      plugins: [plugin],
      plugins: [ChartDataLabels],
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
              font: {
                size: 16,
                family: "Poppins",
                weight: 400,
                lineHeight: 1.88,
              },
            },
          },
          x: {
            ticks: {
              color: "#ffffff",
              font: {
                size: 16,
                family: "Poppins",
                weight: 400,
                lineHeight: 1.88,
              },
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          customCanvasBackgroundColor: {
            color: "#000000",
          },
          legend: {
            display: false,
          },
          datalabels: {
            color: "#ffffff",
            labels: {
              value: {},
            },
            font: {
              size: 19,
              family: "Poppins",
              weight: 400,
              lineHeight: 0.94,
            },
            anchor: "end",
            align: "top",
          },
        },
      },
    });
    new Chart(chartMob, {
      type: "bar",
      data: {
        labels: ["2018", "2020", "2022", "2024", "2026"],
        datasets: [
          {
            label: false,
            data: [13.63, 20.21, 36.41, 57.2, 71.21],
            borderWidth: 1,
            borderColor: "#FEC200",
            backgroundColor: "#FEC200",
            borderRadius: 5,
          },
        ],
      },
      plugins: [plugin],
      plugins: [ChartDataLabels],
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
              font: {
                size: 10,
                family: "Poppins",
                weight: 400,
                lineHeight: 1.88,
              },
            },
          },
          x: {
            ticks: {
              color: "#ffffff",
              font: {
                size: 10,
                family: "Poppins",
                weight: 400,
                lineHeight: 1.88,
              },
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          customCanvasBackgroundColor: {
            color: "#000000",
          },
          legend: {
            display: false,
          },
          datalabels: {
            color: "#ffffff",
            labels: {
              value: {},
            },
            font: {
              size: 12,
              family: "Poppins",
              weight: 400,
              lineHeight: 0.94,
            },
            anchor: "end",
            align: "top",
          },
        },
      },
    });
  }
}
