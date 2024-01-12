import { render } from 'react-dom';
import { TearmList } from './TearmList';
import './index.css';
import { createRoot } from "react-dom/client"

let saveTearmList = (terms) => {
  localStorage.setItem("termList", JSON.stringify(terms))

}

let openTearmList = () => {

  const rawTermList = localStorage.getItem("termList")

  if (!rawTermList) {
    return []
  }

  return JSON.parse(rawTermList)
}

let terms = openTearmList()

let syncTearmList = () => {
  saveTearmList(terms)
  reactRoot.render(<TearmList terms={terms} onDelete={deleteItem} />)

}

let addTerm = (title, description) => {
  terms.push({
    id: crypto.randomUUID(),
    title,
    description,
  })

  terms.sort((a1, b1) => (a1.title < b1.title ? -1 : 1))

  syncTearmList()
}

const deleteItem = (id) => {
  terms = terms.filter(term => term.id !== id)

  syncTearmList()

}

const form = document.getElementById('add-description');

const descriptionList = document.getElementById('description-list')

const reactRoot = createRoot(descriptionList)

syncTearmList()

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  // Выводим термин в консоль
  addTerm(title, description);
});

syncTearmList()