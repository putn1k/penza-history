import Chart from 'chart.js/auto';

const setupChart = ( canvas ) => {
  const ctx = canvas.getContext( '2d' );
  const labels = canvas.dataset.chartLabels.split( ', ' );
  const data = canvas.dataset.chartDatasets.split( ', ' );

  if ( !labels ||
    !data ||
    !Array.isArray( labels ) ||
    !Array.isArray( data ) ||
    ( labels.length === 1 ) ||
    ( data.length === 1 ) ) {
    canvas.remove();
    return;
  }

  ( async function() {
    new Chart(
      ctx, {
        type: 'line',
        data: {
          label: 'Год ',
          labels: labels,
          datasets: [ {
            data: data,
            borderColor: '#39CAF8',
            backgroundColor: 'rgba(57,202,248,70%)',
            pointStyle: 'circle',
            pointRadius: 6,
            pointHoverRadius: 8,
          } ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              border: {
                display: true
              },
              grid: {
                color: function( context ) {
                  if ( context.tick.value == 0 ) {
                    return '#1F1F1F';
                  }
                  return '#8F8F8F';
                },
              },
            }
          }
        },
      }
    );
  } )();
};

document.querySelectorAll( '.сhart' ).forEach( setupChart );