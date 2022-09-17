function search() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  var x = document.getElementsByClassName('ligne')
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none'
    } else {
      x[i].style.display = 'table-row'
    }
  }
}
function maFonction1() {
  document.getElementById('o2').style.display = 'block'
  document.getElementById('o1').style.display = 'none'
}
function maFonction() {
  document.getElementById('o1').style.display = 'block'
  document.getElementById('o2').style.display = 'none'
}
let tab =
  '<thead><tr>' +
  '<td><p>id</p>' +
  '<p></p></td>' +
  '<td><p>Raison Sociale</p>' +
  '<p></p></td>' +
  '<td>Date de la convention</td>' +
  '<td>Nombre de Certifica</td>' +
  '<td>SLA</th>' +
  '<td>Pack de Jeton</td>' +
  '<td>total signature</td>' +
  '<td></td>' +
  '<td>' +
  '</td>' +
  '</th>' +
  '</tr></thead><tbody>'

fetch('http://localhost:8080/getEnterprise')
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      tab +=
        '<tr class="ligne">' +
        '<td>' +
        json[i].id +
        '</p>' +
        '</td>' +
        '<td>' +
        json[i].name +
        '</td>' +
        '<td>' +
        json[i].date_c +
        '</p>' +
        '</td>' +
        '<td>' +
        'NULL' +
        '</p>' +
        '</td>' +
        '<td>' +
        '<p>' +
        'NULL' +
        '</p>' +
        '<p>' +
        'NULL' +
        '</p>' +
        '<p>' +
        'NULL' +
        '</p>' +
        '<p>' +
        '</p>' +
        '</td>' +
        '<td>' +
        json[i].pack_j +
        '</p>' +
        '</td>' +
        '<td>' +
        'NULL' +
        '</p>' +
        '</td>' +
        '<td><br></br><br></br> <button id=" ' +
        json[i].id +
        ' " onclick="feli(this.id)"><i class="fa fa-arrow-right" style="color:#008ea1;border-bottom:0%;"></i></button></td>' +
        '</tr>'
    }
    document.querySelector('.Ent').innerHTML = tab
    document.getElementById('en').innerHTML = json.length
    console.log(document.querySelector('.Ent'))
  })
function createPDF() {
  var sTable = document.querySelector('.case').innerHTML

  var style = '<style>'
  style = style + 'table{border-collapse: collapse;}'
  style =
    style +
    ' thead tr{border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;}'
  style = style + 'thead td{font-weight: 700;}'
  style = style + 'td{padding: .5rem 1rem;}'
  style =
    style +
    'td .status-produit{display: inline-block;height: 15px;width: 15px;margin-right: 1rem;border-radius: 50%;}'
  style = style + ' tr td:last-child{display: flex;align-items: center;}'
  style = style + '</style>'

  var win = window.open('', '', 'height=700,width=700')

  win.document.write('<html><head>')
  win.document.write('<title>Enterprises</title>')
  win.document.write(style)
  win.document.write('</head>')
  win.document.write('<body>')
  win.document.write(sTable)
  win.document.write('</body></html>')

  win.document.close()

  win.print()
}
function feli(clicked_id) {
  let tab1 = null
  tab1 =
    '<thead><tr>' +
    '<td><p>id</p>' +
    '<p></p></td>' +
    '<td><p>client name</p>' +
    '<p></p></td>' +
    '<td>Enterprise</td>' +
    '</tr></thead><tbody>'
  while (true) {
    fetch(
      'http://localhost:8080/Client/enterprise_id?enterprise_id=' + clicked_id
    )
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          tab1 +=
            '<tr class="ligne">' +
            '<td>' +
            json[i].id +
            '</p>' +
            '</td>' +
            '<td>' +
            json[i].user_name +
            '</td>' +
            '<td>' +
            json[i].name +
            '</p>' +
            '</td>' +
            '</tr>'
        }
        // console.log(tab1)

        document.getElementsByClassName('.Inl').innerHTML = tab1
        console.log(document.querySelector('.Inl'))

        // window.open('./index1.html')
      })
    // console.log(document.querySelectorAll('.Inl'))
    // console.log(clicked_id)
  }
}
