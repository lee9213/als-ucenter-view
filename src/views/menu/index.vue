<template>
  <div class="app-container">
    <!-- <el-form :inline="true" :model="dataForm">
      <el-form-item>
        <el-button v-if="isAuth('sys:menu:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
      </el-form-item>
    </el-form> -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('menu.table.name')">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('menu.table.parentName')" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.parentName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('menu.table.icon')" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.icon }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('menu.table.url')" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" :label="$t('menu.table.type')" width="110" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" size="small">目录</el-tag>
          <el-tag v-else-if="scope.row.status === 1" size="small" type="success">菜单</el-tag>
          <el-tag v-else-if="scope.row.status === 2" size="small" type="info">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" :label="$t('menu.manage.name')" width="200">
        <template slot-scope="scope">
         <!-- <el-button v-if="isAuth('sys:menu:update')" type="text" size="small" @click="addOrUpdateHandle(scope.row.menuId)">修改</el-button> -->
          <!-- <el-button v-if="isAuth('sys:menu:delete')" type="text" size="small" @click="deleteHandle(scope.row.menuId)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { list } from '@/api/menu'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'success',
        1: 'gray',
        0: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      prentId: 0
    }
  },
  created() {
    this.fetchData(0)
  },
  methods: {
    fetchData(prentId) {
      this.listLoading = true
      list(prentId).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
