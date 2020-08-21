// Import stylesheets
import './style.css';
import data from './data.js'

// Write Javascript code!
/*
  Given a list of jobs, display the job postings and add action items at the bottom that do the following:

  1. Apply
  2. More Like this
  3. Not interested
  4. Not more like this
*/

function renderRow(doc, fields) {
    doc.classList.add('row')
    if (!Array.isArray(fields)) {
      return new Error ("Fields must be an array")
    }

    for (const f of fields) {
      doc.append(f)
    }

    return doc

}

const actionButtons = (id) => {

  console.log(id)
  let notInterested = document.createElement("button")
  notInterested.innerText = "Not Interested"
  notInterested.onclick = function (id) {
    console.log(id)
    alert(id)
  }
  let skip = document.createElement("button")
  skip.innerText = "Skip"
  let moreLikeThis = document.createElement("button")
  moreLikeThis.innerText = "More Like This"
  let apply = document.createElement("button")
  apply.innerText = "Apply"
  
  return [notInterested, skip, moreLikeThis, apply]
}

function renderCards(jobs) {
  //iterate therough the cards, return html

  for (const job of jobs) {
    let cardDiv = document.createElement("div")
    cardDiv.id = job.linkedinSlug
    let title = document.createElement("h4")
    let description = document.createElement("div")
    let link = document.createElement("a")
    let company = document.createElement("div")
    let place = document.createElement("div")
    let date = document.createElement("div")
    let senorityLevel = document.createElement("div")
    let jobFunction = document.createElement("div")
    let employmentType = document.createElement("div")
    let industries = document.createElement("div")

    title.innerText = job.title
    description.innerText = job.description.text

    link.innerText = "Learn More"
    link.href = job.link

    company.innerText = job.company
    place.innerText = job.place
    date.innerText = job.date
    senorityLevel.innerText = job.senorityLevel
    jobFunction.innerText = job.jobFunction
    employmentType.innerText = job.employmentType
    industries.innerText = job.industries

    cardDiv.append(title)
    cardDiv.append(description)

    cardDiv.append(renderRow(document.createElement("div"), [link, company, place, date]))
    cardDiv.append(renderRow(document.createElement("div"), [senorityLevel, jobFunction, employmentType, industries]))
    cardDiv.append(renderRow(document.createElement("div"), actionButtons(job.linkedinSlug)))

    

    cardDiv.classList.add('job-card')


    document.getElementById('cardContainer').append(cardDiv)
    return
  }
}

renderCards(data)
