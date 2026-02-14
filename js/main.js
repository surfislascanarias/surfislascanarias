/* global FullCalendar */

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  // Altura responsive
  const calendarHeight = window.innerHeight > 700 ? 700 : window.innerHeight - 200;

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    height: calendarHeight,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    selectable: true,
    editable: false,
    navLinks: true,
    eventClick: function(info) {
      // Si quieres, aquí podrías mostrar modal con info.event
      showModal(info.event.title || 'Evento', info.event.extendedProps.description || '');
    }
  });

  calendar.render();

  // Ajustar altura al redimensionar
  window.addEventListener('resize', () => {
    calendar.setOption('height', window.innerHeight > 700 ? 700 : window.innerHeight - 200);
  });
});

// Modal functions
function showModal(title, description) {
  const modal = document.getElementById('eventModal');
  if (!modal) return;
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('eventModal');
  if (modal) modal.style.display = 'none';
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', function(event) {
  const modal = document.getElementById('eventModal');
  if(modal && event.target === modal) modal.style.display = 'none';
});





