const getHeader = () =>
{
    return `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav d-flex ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../public/index.html">Main Page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../public/search.html">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">IMDB's top</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
}

export default  getHeader;