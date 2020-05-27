import {
  appConstants,
  itConstants,
  errorsConstant,
} from "../../constant/constants";
const initialState = {
  users: [],
  loading: false,
  isLogin: false,
  success: false,
  clear: false,
  errors: [],
  employees: [],
  employee: [],
  department: [],
  adding_employee: false,
  loading_dept: true,
};
export default function hrReducer(state = initialState, action) {
  switch (action.type) {
    case errorsConstant.GET_ERRORS: {
      return {
        ...state,
        errors: action.payload,
      };
    }

    case itConstants.REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case itConstants.REGISTER_SUCCESS: {
      const index = state.employees.findIndex(
        (emp) => emp.email === action.payload
      );
      const employees = state.employees[index];
      employees.has_account = true;

      return {
        ...state,
        users: employees,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
        clear: true,
      };
    }
    case itConstants.REGISTER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
        clear: false,
      };
    }

    case appConstants.REGISTER_REQUEST: {
      return {
        ...state,
        adding_employee: true,
        //loading: true,
        success: false,
      };
    }
    case appConstants.REGISTER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
        clear: true,
        adding_employee: false,
        employees: state.employees.concat(action.payload.employe),
      };
    }
    case appConstants.REGISTER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
        clear: false,
      };
    }

    case appConstants.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.FETCH_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.FETCH_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.FETCH_SINGLE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.FETCH_SINGLE_SUCCESS: {
      return {
        ...state,
        employee: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.FETCH_SINGLE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.FETCH_DEPARTMENT_REQUEST: {
      return {
        ...state,
        loading_dept: true,
      };
    }

    case appConstants.FETCH_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        department: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
        loading_dept: false,
      };
    }
    case appConstants.FETCH_DEPARTMENT_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.DELETE_SUCCESS: {
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.employeId !== action.payload
        ),
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.DELETE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case itConstants.DELETE_SUCCESS: {
      const index = state.employees.findIndex(
        (emp) => emp.email === action.payload
      );
      state.employees[index].has_account = false;

      return {
        ...state,
        employees: state.employees,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case itConstants.DELETE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case itConstants.GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case itConstants.GETALL_SUCCESS: {
      return {
        ...state,
        employees: action.payload.filter(
          (emp) => emp.email !== localStorage.getItem("email")
        ),
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case itConstants.GETALL_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
