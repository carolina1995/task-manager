import { Statuses } from '../../helpers/constants';
import { DummyTasks, getTaskListDB } from '../../helpers/database';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskList: getTaskListDB() || [],
    completedList: [],
    filteredList: getTaskListDB() || [],
    openModal: true,
    filters: {
        urgency: "",
        startDate: "",
        endDate: "",
        search: ""
    },
    pagination: {
        currentPage: 1,
        pageSize: 8,
    }
}

const applyAllFilters = (state) => {
    let list = [...state.taskList]; // Assume completeList is the unfiltered list
    const { urgency, search, startDate, endDate } = state.filters;

    if (search) {
        list = list.filter(task => task.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (urgency) {
        list = list.filter(task => task.urgency.value === urgency);
    }

    if (startDate && endDate) {
        list = list.filter(task => task.date >= startDate && task.date <= endDate);
    }

    state.filteredList = list;
}

export const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTaskList: (state, action) => {
            state.taskList = action.payload;
            state.filteredList = action.payload;
        },
        setCompletedTaskList: (state, action) => {
            state.completedList = action.payload;
            state.pagination = initialState.pagination
        },
        setFilteredList: (state, action) => {
            state.filteredList = action.payload
        },
        setOpenModal: (state, action) => {
            state.openModal = action.payload
        },
        updateTaskDescription: (state, action) => {
            const { index, description } = action.payload;
            const item = state.taskList.find((item) => index === item.id);
            const filteredItem = state.filteredList.find((item) => index === item.id);
            if (item) {
                item.description = description
                filteredItem.description = description
            }
        },
        updateTaskChecked: (state, action) => {
            const { index, selected } = action.payload;
            const item = state.taskList.find((item) => index === item.id);
            const filteredItem = state.filteredList.find((item) => index === item.id);
            if (item) {
                item.selected = selected
                filteredItem.selected = selected
            }
        },
        updateSetCheckedAll: (state, action) => {
            const checked = action.payload;
            const list = state.taskList.map((task) => ({ ...task, selected: checked }))
            const filtered = state.filteredList.map((task) => ({ ...task, selected: checked }))
            state.taskList = list
            state.filteredList = filtered
        },
        updateTaskStatus: (state, action) => {
            const { index, value } = action.payload;
            let status = Object.values(Statuses).find((status) => status.id === parseInt(value));
            const item = state.taskList.find((item) => index === item.id);
            const filteredItem = state.filteredList.find((item) => index === item.id);
            if (item) {
                item.status = status
                filteredItem.status = status
                if (status.id === Statuses.Done.id) {
                    item.selected = true
                    filteredItem.selected = true
                }
            }
        },
        sortFilteredList: (state, action) => {
            state.filteredList = action.payload ? state.filteredList.sort((a, b) => a.status.id < b.status.id ? 1 : -1)
                : state.filteredList.sort((a, b) => a.status.id > b.status.id ? 1 : -1)
        },

        filterListBySearch: (state, action) => {
            const search = action.payload;
            state.filters.search = search;
            // Trigger function to apply all filters
            applyAllFilters(state);
        },
        filterListByUrgency: (state, action) => {
            const urgency = action.payload;
            state.filters.urgency = urgency;
            // Trigger function to apply all filters
            applyAllFilters(state);
        },
        filterListByDates: (state, action) => {
            const { value, type } = action.payload;
            if (type === "startDate") {
                state.filters.startDate = value;
            } else if (type === "endDate") {
                state.filters.endDate = value;
            }
            // Trigger function to apply all filters
            applyAllFilters(state);
        },
        resetfilters: (state, action) => {
            state.filters = initialState.filters
            state.filteredList = state.taskList
        },
        initPages: (state, action) => {
            console.log("init")
           state.pagination = initialState.pagination
        },
        nextPage: (state, action) => {
            state.pagination.currentPage += 1;
        },
        prevPage: (state, action) => {
            state.pagination.currentPage -= 1;
        },
    },

});

export default appReducer.reducer;
export const { setTaskList,
    setCompletedTaskList,
    setFilteredList, setOpenModal,
    updateTaskDescription,
    updateTaskChecked,
    updateTaskStatus,
    sortFilteredList,
    resetfilters,
    filterListBySearch,
    filterListByUrgency,
    filterListByDates,
    updateSetCheckedAll,
    initPages,
    nextPage,
    prevPage
} = appReducer.actions;
