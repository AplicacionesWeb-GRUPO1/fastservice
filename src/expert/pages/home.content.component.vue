<template>
  <div class="main-container">
    <section>
      <h2>Ver Trabajos</h2>
      <div class="image-list">
        <div class="scroll-container">
          <img src="@/expert/img/expert%201.png" alt="Image 1" />
          <img src="@/expert/img/expert%202.png" alt="Image 2" />
          <img src="@/expert/img/expert%203.png" alt="Image 3" />
          <img src="@/expert/img/expert%201.png" alt="Image 1" />
          <img src="@/expert/img/expert%202.png" alt="Image 2" />
        </div>
      </div>
    </section>

    <section>
      <h2>Herramientas y Suministros</h2>
      <div class="tool-cards">
        <Card class="tool">
          <i class="pi pi-desktop"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-sun"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-wrench"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-truck"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-trash"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-wifi"></i>
        </Card>
        <Card class="tool">
          <i class="pi pi-shopping-bag"></i>
        </Card>
      </div>
    </section>

    <section>
      <h2>Publicaciones de Clientes</h2>
      <div class="customer-cards">
        <Card class="customer-card">
          <div class="customer-image">
            <img src="@/expert/img/cliente%201.png" alt="Customer 1" />
            <i class="pi pi-heart"></i>
            <i class="pi pi-star" style="color: yellow;"></i>
          </div>
          <div class="customer-info">
            <div class="customer-name">Linda Johnson</div>
            <div class="customer-salary">$100</div>
          </div>
        </Card>

        <Card class="customer-card">
          <div class="customer-image">
            <img src="@/expert/img/cliente%202.png" alt="Customer 2" />
            <i class="pi pi-heart"></i>
            <i class="pi pi-star" style="color: yellow;"></i>
          </div>
          <div class="customer-info">
            <div class="customer-name">Manuel Juerez</div>
            <div class="customer-salary">$15/h</div>
          </div>
        </Card>

        <Card class="customer-card">
          <div class="customer-image">
            <img src="@/expert/img/cliente%203.png" alt="Customer 3" />
            <i class="pi pi-heart"></i>
            <i class="pi pi-star" style="color: yellow;"></i>
          </div>
          <div class="customer-info">
            <div class="customer-name">Elsa Pallo</div>
            <div class="customer-salary">$80/h</div>
          </div>
        </Card>

        <Card class="customer-card">
          <div class="customer-image">
            <img src="@/expert/img/cliente%204.png" alt="Customer 4" />
            <i class="pi pi-heart"></i>
            <i class="pi pi-star" style="color: yellow;"></i>
          </div>
          <div class="customer-info">
            <div class="customer-name">Esteban Quito</div>
            <div class="customer-salary">$15/h</div>
          </div>
        </Card>

        <Card class="customer-card">
          <div class="customer-image">
            <img src="@/expert/img/cliente%205.png" alt="Customer 5" />
            <i class="pi pi-heart"></i>
            <i class="pi pi-star" style="color: yellow;"></i>
          </div>
          <div class="customer-info">
            <div class="customer-name">Pedro Perez</div>
            <div class="customer-salary">$50/h</div>
          </div>
        </Card>


      </div>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  padding: 20px;
  margin-left: 260px;
}

section {
  margin-bottom: 50px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.image-list {
  overflow: hidden;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;
}

img {
  width: 200px;
  margin-right: 10px;
}

.tool-cards {
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  white-space: nowrap;
}

.tool {
  margin-right: 20px;
  text-align: center;
}

.tool i {
  font-size: 36px;
  color: #fff;
  background-color: #3498db;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.customer-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.customer-card {
  width: calc(20% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.customer-image {
  position: relative;
}

.customer-image img {
  width: 50%;
  height: auto;
  padding-top: 20%;
}

.pi.pi-heart{
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
}

.pi.pi-star {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}
.customer-info {
  padding: 10px;
}

.customer-name {
  font-weight: bold;
}

.customer-salary {
  color: #777;
}

</style>

<script >

export default {
  name: 'HomeContent'
}

</script>
